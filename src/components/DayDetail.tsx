import React, { useState } from "react";
import { MONTHS } from "../data/calendarData";
import { getMoonPhase } from "../utils/calendarUtils";
import MoonPhaseDisplay from "./MoonPhaseDisplay";
import {
  getAllNotes,
  addPersonalNote,
  updatePersonalNote,
  deletePersonalNote,
  generateNoteId,
} from "../data/notesData";
import { Note } from "../types/calendar";

interface DayDetailProps {
  year: number;
  month: number;
  day: number;
  onClose: () => void;
}

const DayDetail = ({ year, month, day, onClose }: DayDetailProps) => {
  const [notes, setNotes] = useState<Note[]>(getAllNotes(year, month, day));
  const [newNoteContent, setNewNoteContent] = useState("");
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [editContent, setEditContent] = useState("");

  const handleAddNote = () => {
    if (!newNoteContent.trim()) return;

    const newNote: Note = {
      id: generateNoteId(false, year, month, day),
      year,
      month,
      day,
      content: newNoteContent,
    };

    addPersonalNote(newNote);
    setNotes(getAllNotes(year, month, day));
    setNewNoteContent("");
  };

  const handleUpdateNote = (noteId: string) => {
    if (!editContent.trim()) return;

    updatePersonalNote(noteId, editContent);
    setNotes(getAllNotes(year, month, day));
    setIsEditing(null);
    setEditContent("");
  };

  const handleDeleteNote = (noteId: string) => {
    if (confirm("Are you sure you want to delete this note?")) {
      deletePersonalNote(noteId);
      setNotes(getAllNotes(year, month, day));
    }
  };

  const startEditing = (note: Note) => {
    setIsEditing(note.id);
    setEditContent(note.content);
  };

  const isPersonalNote = (noteId: string) => noteId.startsWith("pp");
  // Get the current month data
  const currentMonth = MONTHS.find((m) => m.id === month);

  if (!currentMonth) {
    return <div>Invalid month selected</div>;
  }

  // Get the moon phase for the selected day
  const moonPhase = getMoonPhase(year, month, day);

  // Format the date
  const formattedDate = `${day} ${currentMonth.name}, ${year} DR`;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-gray-800 rounded-lg shadow-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-gray-700">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold">{formattedDate}</h2>
            <button
              onClick={onClose}
              className="bg-indigo-700 hover:bg-indigo-600 text-white px-3 py-1 rounded"
              aria-label="Close"
            >
              ×
            </button>
          </div>

          <div className="mb-6 flex justify-center">
            <div className="w-24 h-24">
              <MoonPhaseDisplay phase={moonPhase} useHighRes={true} />
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Notes</h3>
            <div className="space-y-4">
              {notes.map((note: Note) => (
                <div
                  key={note.id}
                  className="mb-4 last:mb-0 bg-gray-700 p-4 rounded"
                >
                  {isEditing === note.id ? (
                    <div className="space-y-2">
                      <textarea
                        value={editContent}
                        onChange={(e) => setEditContent(e.target.value)}
                        className="w-full bg-gray-600 p-2 rounded"
                        rows={4}
                      />
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleUpdateNote(note.id)}
                          className="bg-green-600 hover:bg-green-500 px-3 py-1 rounded"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setIsEditing(null)}
                          className="bg-gray-600 hover:bg-gray-500 px-3 py-1 rounded"
                        >
                          Cancel
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <div
                        className="prose prose-invert max-w-none"
                        dangerouslySetInnerHTML={{ __html: note.content }}
                      />
                      {isPersonalNote(note.id) && (
                        <div className="mt-2 flex space-x-2">
                          <button
                            onClick={() => startEditing(note)}
                            className="text-blue-400 hover:text-blue-300 text-sm"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteNote(note.id)}
                            className="text-red-400 hover:text-red-300 text-sm"
                          >
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-gray-700 rounded">
              <h3 className="font-semibold mb-2">Add New Note</h3>
              <div className="space-y-2">
                <textarea
                  value={newNoteContent}
                  onChange={(e) => setNewNoteContent(e.target.value)}
                  placeholder="Enter your note here..."
                  className="w-full bg-gray-600 p-2 rounded"
                  rows={4}
                />
                <button
                  onClick={handleAddNote}
                  className="bg-blue-600 hover:bg-blue-500 px-4 py-2 rounded"
                >
                  Add Note
                </button>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button
              onClick={onClose}
              className="bg-indigo-700 hover:bg-indigo-600 text-white px-4 py-2 rounded"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DayDetail;

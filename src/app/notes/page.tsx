"use client";

import React, { useState, useEffect } from "react";
import Layout from "../../components/Layout";
import {
  HISTORICAL_NOTES,
  getPersonalNotes,
  addPersonalNote,
  updatePersonalNote,
  deletePersonalNote,
  generateNoteId,
} from "../../data/notesData";
import { Note } from "../../types/calendar";
import { MONTHS } from "../../data/calendarData";
import { formatYear } from "../../data/yearData";

const NotesPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"historical" | "personal">(
    "historical"
  );

  // Function to format the date for display
  const formatDate = (note: Note): string => {
    // Handle special month and day codes
    if (note.month === 13) {
      return `${formatYear(note.year)}`;
    }

    const month = MONTHS.find((m) => m.id === note.month);
    const monthName = month ? month.name : "Unknown";

    if (typeof note.day === "string") {
      // Handle special day codes
      switch (note.day) {
        case "Mw":
          return `Midwinter, ${formatYear(note.year)}`;
        case "G":
          return `Greengrass, ${formatYear(note.year)}`;
        case "Ms":
          return `Midsummer, ${formatYear(note.year)}`;
        case "H":
          return `Highharvestide, ${formatYear(note.year)}`;
        case "F":
          return `Feast of the Moon, ${formatYear(note.year)}`;
        case "S":
          return `Shieldmeet, ${formatYear(note.year)}`;
        case "X":
          return `${monthName}, ${formatYear(note.year)}`;
        default:
          return `${note.day} ${monthName}, ${formatYear(note.year)}`;
      }
    }

    return `${note.day} ${monthName}, ${formatYear(note.year)}`;
  };

  const [personalNotes, setPersonalNotes] = useState<Note[]>([]);
  const [isEditing, setIsEditing] = useState<string | null>(null);
  const [newNoteContent, setNewNoteContent] = useState("");
  const [editContent, setEditContent] = useState("");
  const [selectedYear, setSelectedYear] = useState(1372);
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [selectedDay, setSelectedDay] = useState(1);

  // Load personal notes on component mount
  useEffect(() => {
    setPersonalNotes(
      getPersonalNotes(selectedYear, selectedMonth, selectedDay)
    );
  }, [selectedYear, selectedMonth, selectedDay]);

  // Get the notes based on the active tab
  const notes = activeTab === "historical" ? HISTORICAL_NOTES : personalNotes;

  const handleAddNote = () => {
    if (!newNoteContent.trim()) return;

    const newNote: Note = {
      id: generateNoteId(false, selectedYear, selectedMonth, selectedDay),
      year: selectedYear,
      month: selectedMonth,
      day: selectedDay,
      content: newNoteContent,
    };

    addPersonalNote(newNote);
    setPersonalNotes(
      getPersonalNotes(selectedYear, selectedMonth, selectedDay)
    );
    setNewNoteContent("");
  };

  const handleUpdateNote = (noteId: string) => {
    if (!editContent.trim()) return;

    updatePersonalNote(noteId, editContent);
    setPersonalNotes(
      getPersonalNotes(selectedYear, selectedMonth, selectedDay)
    );
    setIsEditing(null);
    setEditContent("");
  };

  const handleDeleteNote = (noteId: string) => {
    if (confirm("Are you sure you want to delete this note?")) {
      deletePersonalNote(noteId);
      setPersonalNotes(
        getPersonalNotes(selectedYear, selectedMonth, selectedDay)
      );
    }
  };

  const startEditing = (note: Note) => {
    setIsEditing(note.id);
    setEditContent(note.content);
  };

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Calendar Notes</h1>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-8">
          <p className="mb-4">
            This page displays both historical and personal notes for the
            Forgotten Realms calendar.
          </p>
          <p>
            Historical notes contain important events from the history of
            Faerûn, while personal notes are for your own campaign events and
            reminders.
          </p>
        </div>

        {/* Tab navigation */}
        <div className="flex mb-6">
          <button
            className={`px-4 py-2 rounded-t-lg ${
              activeTab === "historical"
                ? "bg-gray-800 text-white"
                : "bg-gray-900 text-gray-300 hover:bg-gray-800"
            }`}
            onClick={() => setActiveTab("historical")}
          >
            Historical Notes
          </button>
          <button
            className={`px-4 py-2 rounded-t-lg ml-2 ${
              activeTab === "personal"
                ? "bg-gray-800 text-white"
                : "bg-gray-900 text-gray-300 hover:bg-gray-800"
            }`}
            onClick={() => setActiveTab("personal")}
          >
            Personal Notes
          </button>
        </div>

        {/* Notes list */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">
            {activeTab === "historical" ? "Historical Notes" : "Personal Notes"}
          </h2>

          {/* Date selector for personal notes */}
          {activeTab === "personal" && (
            <div className="mb-6 flex space-x-4">
              <input
                type="number"
                value={selectedYear}
                onChange={(e) => setSelectedYear(parseInt(e.target.value))}
                className="bg-gray-700 px-3 py-2 rounded w-24"
              />
              <select
                value={selectedMonth}
                onChange={(e) => setSelectedMonth(parseInt(e.target.value))}
                className="bg-gray-700 px-3 py-2 rounded"
              >
                {MONTHS.map((month) => (
                  <option key={month.id} value={month.id}>
                    {month.name}
                  </option>
                ))}
              </select>
              <input
                type="number"
                min={1}
                max={30}
                value={selectedDay}
                onChange={(e) => setSelectedDay(parseInt(e.target.value))}
                className="bg-gray-700 px-3 py-2 rounded w-20"
              />
            </div>
          )}

          {/* Notes list */}
          <div className="space-y-4">
            {notes.map((note) => (
              <div key={note.id} className="bg-gray-700 p-4 rounded">
                <h3 className="font-semibold text-yellow-300 mb-2">
                  {formatDate(note)}
                </h3>
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
                    {activeTab === "personal" && (
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

          {/* Add new note form for personal notes */}
          {activeTab === "personal" && (
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
          )}

          {/* Info box for historical notes */}
          {activeTab === "historical" && (
            <div className="mt-6 p-4 bg-gray-700 rounded">
              <h3 className="font-semibold mb-2">Historical Notes</h3>
              <p className="text-sm">
                Historical notes contain important events from the history of
                Faerûn. These notes are read-only and cannot be modified.
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default NotesPage;

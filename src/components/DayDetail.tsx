import React from "react";
import { MONTHS } from "../data/calendarData";
import { getMoonPhase, convertMoonPhaseToIndex } from "../utils/calendarUtils";
import { MOON_PHASES } from "../data/calendarData";
import MoonPhaseDisplay from "./MoonPhaseDisplay";
import { getAllNotes } from "../data/notesData";
import { Note } from "../types/calendar";

interface DayDetailProps {
  year: number;
  month: number;
  day: number;
  onClose: () => void;
}

const DayDetail: React.FC<DayDetailProps> = ({ year, month, day, onClose }) => {
  // Get the current month data
  const currentMonth = MONTHS.find((m) => m.id === month);

  if (!currentMonth) {
    return <div>Invalid month selected</div>;
  }

  // Get the moon phase for the selected day
  const moonPhaseNumber = getMoonPhase(year, month, day);
  const moonPhaseIndex = convertMoonPhaseToIndex(moonPhaseNumber);
  const moonPhase = MOON_PHASES[moonPhaseIndex];

  // Get notes for the selected day
  const notes = getAllNotes(year, month, day);

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
            <MoonPhaseDisplay moonPhase={moonPhase} size="large" />
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">Notes</h3>
            {notes.length > 0 ? (
              <div className="bg-gray-700 p-4 rounded border border-gray-600">
                {notes.map((note: Note) => (
                  <div key={note.id} className="mb-4 last:mb-0">
                    <div
                      className="prose prose-invert max-w-none"
                      dangerouslySetInnerHTML={{ __html: note.content }}
                    />
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-300">No notes for this day.</p>
            )}
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

"use client";

import React, { useState } from "react";
import Layout from "../../components/Layout";
import { HISTORICAL_NOTES, PERSONAL_NOTES } from "../../data/notesData";
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

  // Get the notes based on the active tab
  const notes = activeTab === "historical" ? HISTORICAL_NOTES : PERSONAL_NOTES;

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

          {notes.length > 0 ? (
            <div className="space-y-4">
              {notes.map((note) => (
                <div key={note.id} className="bg-gray-700 p-4 rounded">
                  <h3 className="font-semibold text-yellow-300 mb-2">
                    {formatDate(note)}
                  </h3>
                  <div
                    className="prose prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: note.content }}
                  />
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-300">No notes available.</p>
          )}

          <div className="mt-6 p-4 bg-gray-700 rounded">
            <h3 className="font-semibold mb-2">Adding New Notes</h3>
            <p className="text-sm">
              To add new notes, you can modify the historical.js or personal.js
              files following the format described in notes.txt. In this new
              version, you can also add notes programmatically using the
              addHistoricalNote or addPersonalNote functions.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotesPage;

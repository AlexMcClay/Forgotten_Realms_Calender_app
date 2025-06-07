import React from "react";
import { MONTHS } from "../data/calendarData";
import { getMoonPhase, convertMoonPhaseToIndex } from "../utils/calendarUtils";
import { MOON_PHASES } from "../data/calendarData";
import MoonPhaseDisplay from "./MoonPhaseDisplay";
import { getAllNotes } from "../data/notesData";

interface CalendarGridProps {
  year: number;
  month: number;
  onSelectDay: (day: number) => void;
}

const CalendarGrid: React.FC<CalendarGridProps> = ({
  year,
  month,
  onSelectDay,
}) => {
  // We can use isLeapYear(year) if we need to handle leap years

  // Get the current month data
  const currentMonth = MONTHS.find((m) => m.id === month);

  if (!currentMonth) {
    return <div>Invalid month selected</div>;
  }

  // Determine the number of days in the month
  // In Forgotten Realms calendar, each month has 30 days
  // Except for special holidays that are not counted as part of any month
  const daysInMonth = 30;

  // Create an array of days for the month
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  // Function to check if a day has notes
  const hasNotes = (day: number) => {
    const notes = getAllNotes(year, month, day);
    return notes.length > 0;
  };

  // Function to get the moon phase for a specific day
  const getMoonPhaseForDay = (day: number) => {
    const moonPhaseNumber = getMoonPhase(year, month, day);
    const moonPhaseIndex = convertMoonPhaseToIndex(moonPhaseNumber);
    return MOON_PHASES[moonPhaseIndex];
  };

  // Check if the month has a holiday
  const hasHoliday = currentMonth.primaryHoliday !== null;

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md border border-gray-700">
      <h2 className="text-xl font-bold text-center mb-4">
        {currentMonth.name}
      </h2>

      {/* Display holiday information if present */}
      {hasHoliday && (
        <div className="bg-amber-900 p-2 rounded mb-4 text-center border border-amber-700">
          <p className="font-semibold">{currentMonth.primaryHoliday}</p>
        </div>
      )}

      {/* Secondary holiday or seasonal event */}
      {currentMonth.secondaryHoliday && (
        <div className="bg-indigo-900 p-2 rounded mb-4 text-center border border-indigo-700">
          <p>{currentMonth.secondaryHoliday}</p>
        </div>
      )}

      {/* Calendar grid */}
      <div className="grid grid-cols-7 gap-1">
        {/* Day headers */}
        {["1st", "2nd", "3rd", "4th", "5th", "6th", "7th"].map(
          (dayHeader, index) => (
            <div
              key={`header-${index}`}
              className="text-center font-semibold p-1"
            >
              {dayHeader}
            </div>
          )
        )}

        {/* Calendar days */}
        {days.map((day) => {
          const moonPhase = getMoonPhaseForDay(day);
          const dayHasNotes = hasNotes(day);

          return (
            <div
              key={`day-${day}`}
              className={`
                bg-gray-700 p-2 rounded min-h-[80px] flex flex-col
                ${dayHasNotes ? "ring-2 ring-indigo-400" : ""}
                hover:bg-gray-600 cursor-pointer
              `}
              onClick={() => onSelectDay(day)}
            >
              <div className="text-right font-semibold">{day}</div>

              {/* Moon phase indicator */}
              <div className="mt-auto flex justify-center">
                <MoonPhaseDisplay moonPhase={moonPhase} size="small" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarGrid;

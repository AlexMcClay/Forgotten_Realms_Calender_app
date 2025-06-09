import React from "react";
import { MONTHS } from "../data/calendarData";
import { getMoonPhase } from "../utils/calendarUtils";
import MoonPhaseDisplay from "./MoonPhaseDisplay";
import { getAllNotes } from "../data/notesData";

interface CalendarGridProps {
  year: number;
  month: number;
  onSelectDay: (day: number) => void;
}

function isLeapYear(year: number): boolean {
  // A year is a leap year if it is divisible by 4,
  // except for end-of-century years, which must be divisible by 400.
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
}

const CalendarGrid = ({ year, month, onSelectDay }: CalendarGridProps) => {
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
  const notesLength = (day: number) => {
    const notes = getAllNotes(year, month, day);
    return notes.length;
  };

  // Function to get the moon phase number for a specific day
  const getMoonPhaseForDay = (day: number) => {
    return getMoonPhase(year, month, day);
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
        <div className="bg-amber-900 p-2 rounded mb-4 text-center border border-amber-700 flex items-center justify-center gap-2">
          <p className="font-semibold">{currentMonth.primaryHoliday}</p>
          <div className=" h-[40px] w-[40px]">
            <MoonPhaseDisplay
              phase={getMoonPhaseForDay(31)}
              useHighRes={true}
            />
          </div>
        </div>
      )}

      {/* Secondary holiday or seasonal event */}
      {currentMonth.secondaryHoliday && (
        <div className="bg-indigo-900 p-2 rounded mb-4 text-center border border-indigo-700 flex items-center justify-center gap-2">
          <p>{currentMonth.secondaryHoliday}</p>
        </div>
      )}
      {isLeapYear(year) && month === 7 && (
        <div className="bg-green-900 p-2 rounded mb-4 text-center border border-green-700 flex items-center justify-center gap-2">
          <p className="font-semibold">Shieldmeet</p>
          <div className=" h-[40px] w-[40px]">
            <MoonPhaseDisplay
              phase={getMoonPhaseForDay(32)}
              useHighRes={true}
            />
          </div>
        </div>
      )}

      {/* Calendar grid */}
      <div className="grid grid-cols-10 gap-1">
        {/* Day headers */}
        {[
          "1st",
          "2nd",
          "3rd",
          "4th",
          "5th",
          "6th",
          "7th",
          "8th",
          "9th",
          "10th",
        ].map((dayHeader, index) => (
          <div
            key={`header-${index}`}
            className="text-center font-semibold p-1"
          >
            {dayHeader}
          </div>
        ))}

        {/* Calendar days */}
        {days.map((day) => {
          const moonPhase = getMoonPhaseForDay(day);
          const totalNotes = notesLength(day);

          return (
            <div
              key={`day-${day}`}
              className={`
                bg-gray-700 p-2 rounded min-h-[80px] flex flex-col
                hover:bg-gray-600 cursor-pointer relative
              `}
              onClick={() => onSelectDay(day)}
            >
              {/* Notes count badge */}
              {totalNotes > 0 && (
                <div
                  title={`${totalNotes} note${totalNotes > 1 ? "s" : ""}`}
                  className="absolute top-1 left-1 bg-red-600 text-white text-xs font-semibold px-1 rounded-full w-4 h-4 text-center"
                >
                  {totalNotes}
                </div>
              )}
              <div className="text-right font-semibold">{day}</div>

              {/* Moon phase indicator */}
              <div className="mt-auto flex justify-center">
                <MoonPhaseDisplay phase={moonPhase} useHighRes={true} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CalendarGrid;

import React from "react";
import { MONTHS } from "../data/calendarData";
import { getYearName, formatYear } from "../data/yearData";

interface CalendarControlsProps {
  year: number;
  month: number;
  onYearChange: (year: number) => void;
  onMonthChange: (month: number) => void;
}

const CalendarControls: React.FC<CalendarControlsProps> = ({
  year,
  month,
  onYearChange,
  onMonthChange,
}) => {
  const handlePreviousYear = () => {
    onYearChange(year - 1);
  };

  const handleNextYear = () => {
    onYearChange(year + 1);
  };

  const handlePreviousMonth = () => {
    if (month === 1) {
      onMonthChange(12);
      onYearChange(year - 1);
    } else {
      onMonthChange(month - 1);
    }
  };

  const handleNextMonth = () => {
    if (month === 12) {
      onMonthChange(1);
      onYearChange(year + 1);
    } else {
      onMonthChange(month + 1);
    }
  };

  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newYear = parseInt(e.target.value, 10);
    if (!isNaN(newYear)) {
      onYearChange(newYear);
    }
  };

  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newMonth = parseInt(e.target.value, 10);
    onMonthChange(newMonth);
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md mb-6 border border-gray-700">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <div className="flex items-center mb-4 md:mb-0 text-white ">
          <button
            onClick={handlePreviousYear}
            className="bg-slate-900 hover:bg-slate-600 text-white px-3 py-1 rounded-r"
            aria-label="Previous Year"
          >
            &lt;&lt;
          </button>
          <input
            type="number"
            value={year}
            onChange={handleYearChange}
            className="w-24 px-2 py-1 text-center text-white "
            aria-label="Year"
          />
          <button
            onClick={handleNextYear}
            className="bg-slate-900 hover:bg-slate-600 text-white px-3 py-1 rounded-r"
            aria-label="Next Year"
          >
            &gt;&gt;
          </button>
        </div>

        <div className="flex items-center">
          <button
            onClick={handlePreviousMonth}
            className="bg-slate-900 hover:bg-slate-600 text-white px-3 py-1 rounded-r"
            aria-label="Previous Month"
          >
            &lt;
          </button>
          <select
            value={month}
            onChange={handleMonthChange}
            className="px-2 py-1 text-center text-white "
            aria-label="Month"
          >
            {MONTHS.map((m) => (
              <option
                className="bg-gray-800 text-white"
                key={m.id}
                value={m.id}
              >
                {m.name}
              </option>
            ))}
          </select>
          <button
            onClick={handleNextMonth}
            className="bg-slate-900 hover:bg-slate-600 text-white px-3 py-1 rounded-r"
            aria-label="Next Month"
          >
            &gt;
          </button>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-xl font-bold">{formatYear(year)}</h2>
        <p className="text-yellow-300">{getYearName(year)}</p>
      </div>
    </div>
  );
};

export default CalendarControls;

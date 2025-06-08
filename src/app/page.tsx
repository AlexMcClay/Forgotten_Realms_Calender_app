"use client";

import React, { useState } from "react";
import Layout from "../components/Layout";
import CalendarControls from "../components/CalendarControls";
import CalendarGrid from "../components/CalendarGrid";
import DayDetail from "../components/DayDetail";
import { DEFAULT_YEAR, DEFAULT_MONTH } from "../data/calendarData";

const HomePage: React.FC = () => {
  // State for the current year, month, and selected day
  const [year, setYear] = useState<number>(DEFAULT_YEAR);
  const [month, setMonth] = useState<number>(DEFAULT_MONTH);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  // Handle year change
  const handleYearChange = (newYear: number) => {
    setYear(newYear);
  };

  // Handle month change
  const handleMonthChange = (newMonth: number) => {
    setMonth(newMonth);
  };

  // Handle day selection
  const handleDaySelect = (day: number) => {
    setSelectedDay(day);
  };

  // Handle closing the day detail modal
  const handleCloseDetail = () => {
    setSelectedDay(null);
  };

  console.log("Rendering HomePage with year:", year, "and month:", month);
  console.log("Selected day:", selectedDay);

  return (
    <Layout>
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Forgotten Realms Calendar</h1>

        <CalendarControls
          year={year}
          month={month}
          onYearChange={handleYearChange}
          onMonthChange={handleMonthChange}
        />

        <CalendarGrid year={year} month={month} onSelectDay={handleDaySelect} />

        {selectedDay && (
          <DayDetail
            year={year}
            month={month}
            day={selectedDay}
            onClose={handleCloseDetail}
          />
        )}
      </div>
    </Layout>
  );
};

export default HomePage;

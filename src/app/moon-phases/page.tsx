"use client";

import React, { useState } from "react";
import YearlyMoonPhases from "@/components/YearlyMoonPhases";
import MoonPhaseLegend from "@/components/MoonPhaseLegend";
import MoonPhaseModal from "@/components/MoonPhaseModal";

export default function MoonPhasesPage() {
  const [currentYear, setCurrentYear] = useState(1372); // Default to a specific year in DR
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handlePreviousYear = () => {
    setCurrentYear((prev) => prev - 1);
  };

  const handleNextYear = () => {
    setCurrentYear((prev) => prev + 1);
  };

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="w-full  max-w-[120rem] mx-auto p-4">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Moon Phases Calendar</h1>
        <p className="text-gray-300 mb-4">
          View moon phases for every day of the year, including holidays and
          special events.
        </p>
      </div>

      {/* Year Navigation */}
      <div className="flex items-center justify-between mb-6 bg-gray-800 p-4 rounded-lg">
        <button
          onClick={handlePreviousYear}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center"
          aria-label="Previous Year"
        >
          <span className="mr-2">←</span>
          Previous Year
        </button>
        <div className="text-xl font-bold">{currentYear} DR</div>
        <button
          onClick={handleNextYear}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center"
          aria-label="Next Year"
        >
          Next Year
          <span className="ml-2">→</span>
        </button>
      </div>

      {/* Moon Phases Grid */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-xl">
        <YearlyMoonPhases year={currentYear} />
        <MoonPhaseLegend onInfoClick={handleOpenModal} />
      </div>

      {/* Moon Phase Info Modal */}
      <MoonPhaseModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
}

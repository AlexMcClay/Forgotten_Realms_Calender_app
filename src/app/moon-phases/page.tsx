"use client";

import React from "react";
import Layout from "../../components/Layout";
import MoonPhaseDisplay from "../../components/MoonPhaseDisplay";
import { MOON_PHASES } from "../../data/calendarData";

const MoonPhasesPage: React.FC = () => {
  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Phases of Selûne</h1>

        <div className="bg-gray-800 p-6 rounded-lg shadow-md mb-8 border border-gray-700">
          <p className="mb-4">
            Selûne is the moon of Toril, the world of the Forgotten Realms. Like
            Earth&apos;s moon, Selûne goes through phases as it orbits around
            Toril.
          </p>

          <p>
            The phases of Selûne are important to many cultures and religions in
            the Realms, particularly to worshippers of the goddess Selûne, who
            is associated with the moon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {MOON_PHASES.map((phase) => (
            <div
              key={phase.id}
              className="bg-gray-700 p-4 rounded-lg shadow-md border border-gray-600"
            >
              <MoonPhaseDisplay moonPhase={phase} size="large" />
            </div>
          ))}
        </div>

        <div className="mt-8 bg-gray-800 p-6 rounded-lg shadow-md border border-gray-700">
          <h2 className="text-xl font-bold mb-4">About the Lunar Cycle</h2>
          <p className="mb-4">
            The lunar cycle of Selûne takes 30 days to complete, which
            corresponds to the 30-day months in the Calendar of Harptos used
            throughout Faerûn.
          </p>
          <p>
            Tracking the phases of the moon is important for many activities in
            the Realms, from navigation to magic rituals, and even affects the
            behavior of certain creatures like lycanthropes.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default MoonPhasesPage;

import React from "react";
import { getMoonPhase } from "@/utils/calendarUtils";
import MoonPhaseDisplay from "./MoonPhaseDisplay";

interface YearlyMoonPhasesProps {
  year: number;
}

const MONTHS = [
  "Hammer",
  "Alturiak",
  "Ches",
  "Tarsakh",
  "Mirtul",
  "Kythorn",
  "Flamerule",
  "Eleasis",
  "Eleint",
  "Marpenoth",
  "Uktar",
  "Nightal",
];

const HOLIDAYS: Holiday[] = [
  { name: "Midwinter", after: "Hammer", day: 31 },
  // { name: "Spring Equinox", after: "Ches", day: 31 },
  { name: "Greengrass", after: "Tarsakh", day: 31 },
  { name: "Midsummer", after: "Flamerule", day: 31 },
  { name: "Shieldmeet", after: "Flamerule", day: 32, leapYearOnly: true },
  { name: "Highharvestide", after: "Eleint", day: 31 },
  { name: "Feast of the Moon", after: "Uktar", day: 31 },
];

interface Holiday {
  name: string;
  after: string;
  day: number;
  leapYearOnly?: boolean;
}

export default function YearlyMoonPhases({ year }: YearlyMoonPhasesProps) {
  // Function to get the moon phase for a specific day
  const getMoonPhaseForDay = (monthName: string, day: number) => {
    const monthIndex = MONTHS.indexOf(monthName) + 1;
    return getMoonPhase(year, monthIndex, day);
  };

  // Function to check if it's a leap year
  const isLeapYear = (year: number): boolean => {
    return year % 4 === 0;
  };

  // Filter holidays based on leap year
  const filteredHolidays = HOLIDAYS.filter(
    (holiday) => !holiday.leapYearOnly || isLeapYear(year)
  );

  // Function to get holiday for a specific month and day
  const getHoliday = (month: string, day: number) => {
    return filteredHolidays.find((h) => h.after === month && h.day === day);
  };

  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr className="bg-gray-900">
            <th className="p-2 border">Month</th>
            {Array.from({ length: 32 }, (_, i) => (
              <th key={i + 1} className="p-2 border w-12">
                {i + 1}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {MONTHS.map((month) => {
            return (
              <tr key={month} className="hover:bg-gray-800">
                <td className="p-2 border font-medium">{month}</td>
                {Array.from({ length: 32 }, (_, dayIndex) => {
                  const day = dayIndex + 1;
                  const holiday = getHoliday(month, day);
                  // Regular days (1-30)
                  if (day <= 30) {
                    const phase = getMoonPhaseForDay(month, day);
                    return (
                      <td key={day} className="p-2 border text-center">
                        <div className="flex flex-col items-center">
                          <div className="w-8 h-8 mx-auto">
                            <MoonPhaseDisplay phase={phase} />
                          </div>
                        </div>
                      </td>
                    );
                  }

                  // Holiday days (31-32)
                  const isHoliday = Boolean(holiday);
                  return (
                    <td
                      key={day}
                      className={`p-2 border text-center ${
                        isHoliday ? "bg-amber-900" : ""
                      }`}
                    >
                      <div className="flex flex-col items-center">
                        <div className="w-8 h-8 mx-auto">
                          <MoonPhaseDisplay
                            phase={
                              isHoliday
                                ? getMoonPhaseForDay(month, day)
                                : undefined
                            }
                          />
                        </div>
                        {isHoliday && (
                          <div className="text-xs mt-1 text-amber-200">
                            {holiday!.name}
                          </div>
                        )}
                      </div>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

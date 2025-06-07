import { YearData } from "../types/calendar";

// This is a sample of year data from the Forgotten Realms calendar
// In the original app, this data was stored in year.js
export const YEARS: YearData[] = [
  { year: 1372, name: "Year of Wild Magic" },
  { year: 1373, name: "Year of Rogue Dragons" },
  { year: 1374, name: "Year of Lightning Storms" },
  { year: 1375, name: "Year of Risen Elfkin" },
  { year: 1376, name: "Year of the Bent Blade" },
  { year: 1377, name: "Year of the Haunting" },
  { year: 1378, name: "Year of the Cauldron" },
  { year: 1379, name: "Year of the Lost Keep" },
  { year: 1380, name: "Year of the Blazing Hand" },
  { year: 1381, name: "Year of the Starving" },
  { year: 1382, name: "Year of the Black Blazon" },
  { year: 1383, name: "Year of the Vindicated Warrior" },
  { year: 1384, name: "Year of Three Streams Blooded" },
  { year: 1385, name: "Year of Blue Fire" },
  { year: 1386, name: "Year of the Halflings' Lament" },
  { year: 1387, name: "Year of the Emerald Ermine" },
  { year: 1388, name: "Year of the Tanarukka" },
  { year: 1389, name: "Year of the Forgiven Foes" },
  { year: 1390, name: "Year of the Walking Man" },
  { year: 1391, name: "Year of the Wrathful Eye" },
  { year: 1392, name: "Year of the Scroll" },
  { year: 1393, name: "Year of the Ring" },
  { year: 1394, name: "Year of the Awakened Sleepers" },
  { year: 1395, name: "Year of the Pensive Whisper" },
  { year: 1396, name: "Year of the Secret" },
  { year: 1397, name: "Year of the Purple Basilisk" },
  { year: 1398, name: "Year of the Reborn Hero" },
  { year: 1399, name: "Year of Fallen Friends" },
  { year: 1400, name: "Year of Lost Ships" },

  // Add some historical years
  { year: 1, name: "Year of Sunrise" },
  { year: 100, name: "Year of the Bloodrose" },
  { year: 200, name: "Year of the Deadly Torch" },
  { year: 300, name: "Year of the Smoking Stones" },
  { year: 400, name: "Year of the Blue Shield" },
  { year: 500, name: "Year of the Flaming Forests" },
  { year: 600, name: "Year of the Swords" },
  { year: 700, name: "Year of the Wandering Waves" },
  { year: 800, name: "Year of the Dying Stars" },
  { year: 900, name: "Year of the Vengeful Horde" },
  { year: 1000, name: "Year of the Blazing Banners" },
  { year: 1100, name: "Year of the Bloody Tusk" },
  { year: 1200, name: "Year of the Lost Helm" },
  { year: 1300, name: "Year of the Starfall" },

  // Add some negative years (before Dale Reckoning)
  { year: -100, name: "Year of the Argent Shafts" },
  { year: -200, name: "Year of the Ominous Oracle" },
  { year: -300, name: "Year of the Broken Branch" },
  { year: -400, name: "Year of the Haunting Harpy" },
  { year: -500, name: "Year of the Circling Vulture" },
  { year: -600, name: "Year of the Falling Stars" },
  { year: -700, name: "Year of the Leering Orc" },
  { year: -800, name: "Year of the Crumbling Keep" },
  { year: -900, name: "Year of the Shattered Altar" },
  { year: -1000, name: "Year of the Watching Raven" },
];

/**
 * Gets the name of a year
 * @param year The year to look up
 * @returns The name of the year, or a generic name if not found
 */
export function getYearName(year: number): string {
  const yearData = YEARS.find((y) => y.year === year);
  if (yearData) {
    return yearData.name;
  }

  // If the year is not found, return a generic name
  return `Year of ${year}`;
}

/**
 * Formats a year with "DR" suffix or "BDR" prefix for negative years
 * @param year The year to format
 * @returns Formatted year string
 */
export function formatYear(year: number): string {
  if (year < 0) {
    return `${Math.abs(year)} BDR`; // Before Dale Reckoning
  }
  return `${year} DR`; // Dale Reckoning
}

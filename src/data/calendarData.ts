import { MonthData, MoonPhase } from "../types/calendar";

export const MONTHS: MonthData[] = [
  {
    id: 1,
    name: "Hammer",
    primaryHoliday: "Midwinter (Annual Holiday)",
    secondaryHoliday: null,
  },
  {
    id: 2,
    name: "Alturiak",
    primaryHoliday: null,
    secondaryHoliday: null,
  },
  {
    id: 3,
    name: "Ches",
    primaryHoliday: null,
    secondaryHoliday: "Ches 19: Spring Equinox",
  },
  {
    id: 4,
    name: "Tarsakh",
    primaryHoliday: "Greengrass (Annual Holiday)",
    secondaryHoliday: null,
  },
  {
    id: 5,
    name: "Mirtul",
    primaryHoliday: null,
    secondaryHoliday: null,
  },
  {
    id: 6,
    name: "Kythorn",
    primaryHoliday: null,
    secondaryHoliday: "Kythorn 20: Summer Solstice",
  },
  {
    id: 7,
    name: "Flamerule",
    primaryHoliday: "Midsummer (Annual Holiday)",
    secondaryHoliday: null,
  },
  {
    id: 8,
    name: "Eleasis",
    primaryHoliday: null,
    secondaryHoliday: null,
  },
  {
    id: 9,
    name: "Eleint",
    primaryHoliday: "Highharvestide (Annual Holiday)",
    secondaryHoliday: "Eleint 21: Autumn Equinox",
  },
  {
    id: 10,
    name: "Marpenoth",
    primaryHoliday: null,
    secondaryHoliday: null,
  },
  {
    id: 11,
    name: "Uktar",
    primaryHoliday: "The Feast of the Moon (Annual Holiday)",
    secondaryHoliday: null,
  },
  {
    id: 12,
    name: "Nightal",
    primaryHoliday: null,
    secondaryHoliday: "Nightal 20: Winter Solstice",
  },
];

export const MOON_PHASES: MoonPhase[] = [
  {
    id: 1,
    name: "New Moon",
    description:
      "Selûne's unilluminated side is facing Toril. Selûne is not visible (except during a solar eclipse).",
    imagePath: "/images/moons/Moon_x1.jpg",
  },
  {
    id: 2,
    name: "Waxing Crescent",
    description:
      "Selûne appears to be partly but less than one-half illuminated by direct sunlight. The fraction of the Selûne's disk that is illuminated is increasing.",
    imagePath: "/images/moons/Moon_x2.jpg",
  },
  {
    id: 3,
    name: "First Quarter",
    description:
      "One-half of Selûne appears to be illuminated by direct sunlight. The fraction of Selûne's disk that is illuminated is increasing.",
    imagePath: "/images/moons/Moon_x3.jpg",
  },
  {
    id: 4,
    name: "Waxing Gibbous",
    description:
      "Selûne appears to be more than one-half but not fully illuminated by direct sunlight. The fraction of Selûne's disk that is illuminated is increasing.",
    imagePath: "/images/moons/Moon_x4.jpg",
  },
  {
    id: 5,
    name: "Full Moon",
    description:
      "Selûne's illuminated side is facing Toril. Selûne appears to be completely illuminated by direct sunlight.",
    imagePath: "/images/moons/Moon_x5.jpg",
  },
  {
    id: 6,
    name: "Waning Gibbous",
    description:
      "Selûne appears to be more than one-half but not fully illuminated by direct sunlight. The fraction of Selûne's disk that is illuminated is decreasing.",
    imagePath: "/images/moons/Moon_x6.jpg",
  },
  {
    id: 7,
    name: "Last Quarter",
    description:
      "One-half of Selûne appears to be illuminated by direct sunlight. The fraction of Selûne's disk that is illuminated is decreasing.",
    imagePath: "/images/moons/Moon_x7.jpg",
  },
  {
    id: 8,
    name: "Waning Crescent",
    description:
      "Selûne appears to be partly but less than one-half illuminated by direct sunlight. The fraction of Selûne's disk that is illuminated is decreasing.",
    imagePath: "/images/moons/Moon_x8.jpg",
  },
];

// Default starting year
export const DEFAULT_YEAR = 1372;
export const DEFAULT_MONTH = 1;
export const DEFAULT_DAY = 1;

// Special days
export const SPECIAL_DAYS = {
  MIDWINTER: "Mw",
  GREENGRASS: "G",
  MIDSUMMER: "Ms",
  HIGHHARVESTIDE: "H",
  FEAST_OF_THE_MOON: "F",
  SHIELDMEET: "S",
};

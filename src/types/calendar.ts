export interface YearData {
  year: number;
  name: string;
}

export interface MonthData {
  id: number;
  name: string;
  primaryHoliday: string | null;
  secondaryHoliday: string | null;
}

export interface MoonPhase {
  id: number;
  name: string;
  description: string;
  imagePath: string;
}

export interface Note {
  id: string;
  year: number;
  month: number;
  day: number | string;
  content: string;
}

export interface CalendarState {
  currentYear: number;
  currentMonth: number;
  currentDay: number;
  isLeapYear: boolean;
  leapYearType: number;
}

import { 
  startOfWeek, 
  endOfWeek, 
  format, 
  isSameDay, 
  addDays, 
  subDays,
  startOfDay,
  isToday,
  isTomorrow,
  isYesterday
} from 'date-fns';
import { DayOfWeek } from '../types';

export const DAYS_OF_WEEK: DayOfWeek[] = [
  'monday',
  'tuesday', 
  'wednesday',
  'thursday',
  'friday',
  'saturday',
  'sunday'
];

export function getWeekDays(date: Date): Date[] {
  const start = startOfWeek(date, { weekStartsOn: 1 }); // Start on Monday
  return Array.from({ length: 7 }, (_, i) => addDays(start, i));
}

export function formatDayName(date: Date): string {
  if (isToday(date)) return 'Today';
  if (isTomorrow(date)) return 'Tomorrow';
  if (isYesterday(date)) return 'Yesterday';
  return format(date, 'EEEE');
}

export function formatShortDayName(date: Date): string {
  if (isToday(date)) return 'Today';
  return format(date, 'EEE');
}

export function formatTaskDate(date: Date): string {
  return format(date, 'MMM dd, yyyy');
}

export function getDayOfWeekFromDate(date: Date): DayOfWeek {
  const dayIndex = date.getDay();
  // Convert JavaScript day index (0 = Sunday) to our format (Monday = 0)
  const mondayFirstIndex = dayIndex === 0 ? 6 : dayIndex - 1;
  return DAYS_OF_WEEK[mondayFirstIndex];
}

export function getDateFromDayOfWeek(dayOfWeek: DayOfWeek, weekStartDate: Date): Date {
  const dayIndex = DAYS_OF_WEEK.indexOf(dayOfWeek);
  return addDays(startOfWeek(weekStartDate, { weekStartsOn: 1 }), dayIndex);
}

export function isSameWeek(date1: Date, date2: Date): boolean {
  const week1Start = startOfWeek(date1, { weekStartsOn: 1 });
  const week2Start = startOfWeek(date2, { weekStartsOn: 1 });
  return isSameDay(week1Start, week2Start);
}

export function getWeekRange(date: Date): { start: Date; end: Date } {
  const start = startOfWeek(date, { weekStartsOn: 1 });
  const end = endOfWeek(date, { weekStartsOn: 1 });
  return { start, end };
}

export function getNextWeek(currentDate: Date): Date {
  return addDays(currentDate, 7);
}

export function getPreviousWeek(currentDate: Date): Date {
  return subDays(currentDate, 7);
}

export function normalizeDate(date: Date): Date {
  return startOfDay(date);
}
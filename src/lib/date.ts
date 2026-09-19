const MS_PER_MONTH = 1000 * 60 * 60 * 24 * 30.44;

/** Human readable duration between two dates, e.g. "5yr 4mo", "1yr" or "3mo". */
export function formatDuration(start: Date, end: Date = new Date()): string {
  const totalMonths = Math.floor(
    Math.abs(end.getTime() - start.getTime()) / MS_PER_MONTH,
  );
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return [years > 0 && `${years}yr`, months > 0 && `${months}mo`]
    .filter(Boolean)
    .join(" ");
}

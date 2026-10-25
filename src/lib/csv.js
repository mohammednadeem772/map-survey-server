// Minimal CSV encoder for the dashboard export. Pulled out of
// routes/dashboard.routes.js so the escaping rules can be unit tested.

/** Wraps a value in double quotes, doubling any quotes it already contains. */
function escapeCsvValue(value) {
  return `"${String(value ?? '').replaceAll('"', '""')}"`;
}

/** Turns an array of plain objects into a CSV string (header row + data rows). */
export function toCsv(rows) {
  if (!rows.length) return '';
  const header = Object.keys(rows[0]);
  const lines = [
    header.join(','),
    ...rows.map((row) => Object.values(row).map(escapeCsvValue).join(',')),
  ];
  return lines.join('\n');
}

export function generateRows(articles, rowsCount) {
  const patterns = [
    [0, 1, 2], // рядок 1: 1, 2, 3
    [0, 2, 1], // рядок 2: 1, 3, 2
    [2, 1, 0], // рядок 3: 3, 2, 1
    [1, 0, 2], // рядок 4: 2, 1, 3
  ];

  const rows = [];

  for (let i = 0; i < rowsCount; i++) {
    const pattern = patterns[i % patterns.length];
    const row = pattern.map((idx) => articles[idx]);
    rows.push(row);
  }

  return rows;
}

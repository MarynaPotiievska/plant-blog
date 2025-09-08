export function generateRows(articles, rowsCount, search) {
  const basePatterns = {
    1: [[0, 0, 0]],
    2: [
      [0, 1, 0],
      [1, 0, 1],
    ],
    3: [
      [0, 1, 2],
      [0, 2, 1],
      [2, 1, 0],
      [1, 0, 2],
    ],
  };

  const patterns = basePatterns[articles.length] || basePatterns[3];

  const filteredRowsCount = Math.min(
    rowsCount,
    Math.floor((articles.length * rowsCount) / 3)
  );

  const rows = [];

  for (let i = 0; i < filteredRowsCount; i++) {
    const pattern = patterns[i % patterns.length];
    const row = pattern.map((idx) => articles[idx]);
    rows.push(row);
  }

  return rows;
}

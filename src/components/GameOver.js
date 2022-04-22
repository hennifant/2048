const checkGameOver = (tiles, size) => {
  let isGameOver = true;
  let zeroCount = tiles.reduce((a, c) => (c === 0 ? a + 1 : a), 0);
  if (zeroCount > 0) {
    return false;
  }
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size - 1; j++) {
      if (tiles[i * size + j] === tiles[i * size + j + 1]) {
        isGameOver = false;
      }
    }
  }

  for (let j = 0; j < size; j++) {
    for (let i = 0; i < size - 1; i++) {
      if (tiles[i * size + j] === tiles[(i + 1) * size + j]) {
        isGameOver = false;
      }
    }
  }
  return isGameOver;
};

export default checkGameOver;

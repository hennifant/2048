const compress = (tiles, callback, size) => {
  let newTiles = [];
  let score = 0;
  for (let i = 0; i < size; i++) {
    let arr = tiles.slice(i * size, i * size + size).filter(x => x !== 0);
    while (arr.length < size) {
      arr.push(0);
    }
    for (let j = 0; j < size - 1; j++) {
      if (arr[j] === 0) {
        break;
      } else if (arr[j] === arr[j + 1]) {
        arr[j] *= 2;
        score += arr[j];
        arr[j + 1] = 0;
        arr = arr.filter(x => x !== 0);
        while (arr.length < size) {
          arr.push(0);
        }
      }
    }
    newTiles = [...newTiles, ...arr];
  }
  callback(_score => _score + score);
  return newTiles;
};

export default compress;

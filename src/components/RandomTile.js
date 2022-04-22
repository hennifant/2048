const addRandomTile = tiles => {
  let zeroIndex = tiles
    .map((tile, ind) => (tile === 0 ? ind + 1 : 0))
    .filter(x => x !== 0);
  let newTiles = tiles;

  if (Math.random() > 0.5) {
    newTiles[zeroIndex[Math.floor(Math.random() * zeroIndex.length)] - 1] = 2;
  } else {
    newTiles[zeroIndex[Math.floor(Math.random() * zeroIndex.length)] - 1] = 4;
  }
  return newTiles;
};

export default addRandomTile;

import { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';

import TileGrid from './components/TileGrid.js';

const rotateLeft = (tiles, size) => {
  const newTiles = [];
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      let k = size - 1 - i;
      newTiles[j + i * size] = tiles[k + j * size];
    }
  }
  return newTiles;
};

const rotateRight = (tiles, size) => {
  const newTiles = [];
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      let k = size - 1 - j;
      newTiles[j + i * size] = tiles[i + k * size];
    }
  }
  return newTiles;
};

function App() {
  return (
    <div className="App">
      <TileGrid tiles={tiles} size={size} />
    </div>
  );
}

export default App;

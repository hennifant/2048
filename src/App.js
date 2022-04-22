import { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import styled from 'styled-components';
import addRandomTile from './components/RandomTile.js';
import checkGameOver from './components/GameOver.js';

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
  const [size, setSize] = useState(4);
  const [tiles, setTiles] = useState(() => {
    return addRandomTile(addRandomTile(new Array(size * size).fill(0)));
  });
  return (
    <AppContainer>
      <TileGrid tiles={tiles} size={size} />
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  text-align: center;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.2rem;
  font-family: 'Poppins', sans-serif;
  position: relative;
`;

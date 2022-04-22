import { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import styled from 'styled-components';

import compress from './components/Compress.js';
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
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  const handleSwipe = event => {
    if (checkGameOver(tiles, size)) {
      setIsGameOver(true);
    } else {
      let T = [];
      switch (event.dir) {
        case 'Up':
          //left//compress//right
          T = rotateLeft(tiles, size);
          T = compress(T, setScore, size);
          T = rotateRight(T, size);
          T = addRandomTile(T);
          setTiles(T);
          break;
        case 'Down':
          //right//compress//left
          T = rotateRight(tiles, size);
          T = compress(T, setScore, size);
          T = rotateLeft(T, size);
          T = addRandomTile(T);
          setTiles(T);
          break;
        case 'Right':
          //right //right//compress//left //left
          T = rotateRight(tiles, size);
          T = rotateRight(T, size);
          T = compress(T, setScore, size);
          T = rotateLeft(T, size);
          T = rotateLeft(T, size);
          T = addRandomTile(T);
          setTiles(T);
          break;
        case 'Left':
          //compress
          T = compress(tiles, setScore, size);
          T = addRandomTile(T);
          setTiles(T);
          break;
        default:
          break;
      }
    }
  };

  const handlers = useSwipeable({
    onSwiped: handleSwipe,
    preventDefaultTouchmoveEvent: true,
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

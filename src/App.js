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
          T = rotateLeft(tiles, size);
          T = compress(T, setScore, size);
          T = rotateRight(T, size);
          T = addRandomTile(T);
          setTiles(T);
          break;
        case 'Down':
          T = rotateRight(tiles, size);
          T = compress(T, setScore, size);
          T = rotateLeft(T, size);
          T = addRandomTile(T);
          setTiles(T);
          break;
        case 'Right':
          T = rotateRight(tiles, size);
          T = rotateRight(T, size);
          T = compress(T, setScore, size);
          T = rotateLeft(T, size);
          T = rotateLeft(T, size);
          T = addRandomTile(T);
          setTiles(T);
          break;
        case 'Left':
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

  useEffect(() => {
    const vmin =
      (Math.min(window.innerHeight, window.innerWidth) * 4 * 5) / 100 / size;
    document.documentElement.style.setProperty('font-size', vmin + 'px');
    setTiles(t => {
      return addRandomTile(addRandomTile(new Array(size * size).fill(0)));
    });
  }, [size]);

  useEffect(() => {
    const handleKeyDown = e => {
      if (checkGameOver(tiles, size)) {
        setIsGameOver(true);
      } else {
        let T = [];
        switch (e.keyCode) {
          case 38:
            T = rotateLeft(tiles, size);
            T = compress(T, setScore, size);
            T = rotateRight(T, size);
            T = addRandomTile(T);
            setTiles(T);
            break;
          case 40:
            T = rotateRight(tiles, size);
            T = compress(T, setScore, size);
            T = rotateLeft(T, size);
            T = addRandomTile(T);
            setTiles(T);
            break;
          case 39:
            T = rotateRight(tiles, size);
            T = rotateRight(T, size);
            T = compress(T, setScore, size);
            T = rotateLeft(T, size);
            T = rotateLeft(T, size);
            T = addRandomTile(T);
            setTiles(T);
            break;
          case 37:
            T = compress(tiles, setScore, size);
            T = addRandomTile(T);
            setTiles(T);
            break;
          default:
            break;
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [tiles, size]);

  const handleReplay = () => {
    setTiles(() => {
      return addRandomTile(addRandomTile(new Array(size * size).fill(0)));
    });
    if (score > bestScore) {
      setBestScore(score);
      localStorage.setItem('8192BEST', score);
    }
    setScore(0);
    setIsGameOver(false);
  };
  const handleSize = value => {
    if (value === -1 && size > 3) {
      setSize(size => size + value);
    } else if (value === 1 && size < 20) {
      setSize(size => size + value);
    }
  };
  return (
    <AppContainer {...handlers}>
      <ButtonWrapper>
        <AddButton
          onClick={event => {
            event.preventDefault();
            handleSize(-1);
          }}
        >
          -
        </AddButton>
        <div className="sizeDiv">{size}</div>
        <RemoveButton
          className="add btn"
          onClick={event => {
            event.preventDefault();
            handleSize(1);
          }}
        >
          +
        </RemoveButton>
      </ButtonWrapper>
      <TileGrid tiles={tiles} size={size} />
      <ScoreContainer>
        <div>
          <span className="small">Score: </span>
          {score}
        </div>
        <div>
          <span className="small">Best: </span>
          {bestScore}
        </div>
      </ScoreContainer>
      {isGameOver && <GameOver onClick={handleReplay}>GAME OVER</GameOver>}
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

const ButtonWrapper = styled.div`
  padding: 0.05rem 0rem;
  width: 75vmin;
  font-size: 30px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 0.2rem;
`;

const AddButton = styled.button``;

const RemoveButton = styled.button``;

const ScoreContainer = styled.div`
  padding: 0.05rem 0.6rem;
  width: 75vmin;
  font-size: 30px;
  border-radius: 0.5rem;
  background-color: #8f7a66;
  font-weight: 600;
  color: #ffd5e5;
  display: flex;
  justify-content: space-between;

  div {
    display: inline-block;
  }

  span {
    font-size: 0.7em;
    opacity: 0.7;
  }
`;

const GameOver = styled.div`
  position: absolute;
  padding: 1rem 1.5rem;
  font-size: 1.8rem;
  border-radius: 0.25rem;
  background-color: #8f7a66;
  font-weight: 600;
  color: #ffd5e5;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

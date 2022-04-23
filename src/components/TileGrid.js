import styled from 'styled-components';
import Tile from './Tile';

const TileGrid = ({ tiles, size }) => {
  return (
    <TileGridContainer
      style={{
        gridTemplateColumns: `repeat(${size},1fr)`,
        gridTemplateRows: `repeat(${size},1fr)`,
      }}
    >
      {tiles.map((tile, _) => (
        <Tile key={_} id={_} value={tile} />
      ))}
    </TileGridContainer>
  );
};

const TileGridContainer = styled.div`
  width: 75vmin;
  height: 75vmin;
  background-color: #0e0e10;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  justify-content: center;
  align-items: center;
  grid-gap: 0.6rem;
  padding: 0.6rem;
  border-radius: 0.5rem;
`;

export default TileGrid;

import { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';

import TileGrid from './components/TileGrid.js';

function App() {
  return (
    <div className="App">
      <TileGrid tiles={tiles} size={size} />
    </div>
  );
}

export default App;

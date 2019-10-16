import React, { useState } from 'react';

import Welcome from '~/pages/Welcome';
import Game from '~/pages/Game';

const SCREENS = {
  Welcome,
  Game,
};

function App() {
  const [screenName, navigate] = useState('Welcome');
  const CurrentScreen = SCREENS[screenName] || React.Fragment;

  return <CurrentScreen navigate={navigate} />;
}

export default App;

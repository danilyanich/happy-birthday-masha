import React, { useState } from 'react';

import Welcome from '~/pages/Welcome';
import Game from '~/pages/Game';
import End from '~/pages/End';

const SCREENS = {
  Welcome,
  Game,
  End,
};

function App() {
  const [screenName, navigate] = useState('Welcome');
  const CurrentScreen = SCREENS[screenName] || React.Fragment;

  return <CurrentScreen navigate={navigate} />;
}

export default App;

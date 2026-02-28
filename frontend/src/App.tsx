import { useState } from 'react';
import WelcomeGate from './components/WelcomeGate';
import GardenPage from './components/GardenPage';

function App() {
  const [entered, setEntered] = useState(false);

  return (
    <>
      {!entered && <WelcomeGate onEnter={() => setEntered(true)} />}
      {entered && <GardenPage />}
    </>
  );
}

export default App;

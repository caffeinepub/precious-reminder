import { useState } from 'react';
import LoveLetterPage from './components/LoveLetterPage';
import WelcomeGate from './components/WelcomeGate';

function App() {
  const [entered, setEntered] = useState(false);

  if (!entered) {
    return <WelcomeGate onEnter={() => setEntered(true)} />;
  }

  return <LoveLetterPage />;
}

export default App;

import '../style/App.css';

import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import Input from './Input';

function App() {

  // TODO: get props from shared state
  const success = false;
  const secretWord = 'party';
  const guessedWords = [];

  return (
    <div data-test="component-app" className="container">
      <h1>Jotto Game</h1>
      <Congrats success={true}/>
      <Input success={success} secretWord={secretWord}/>
      <GuessedWords guessedWords={guessedWords}/>
      
      <div id="guess-words">
        <h3>Try to guess the word</h3>
        
      </div>
    </div>
  );
}

export default App;

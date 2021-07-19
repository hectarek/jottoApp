import '../style/App.css';

import Congrats from './Congrats';
import GuessedWords from './GuessedWords';
import Input from './Input';

function App() {
  return (
    <div className="container">
      <h1>Jotto Game</h1>
      <Congrats success={true}/>
      <Input />
      <GuessedWords guessedWords={[ {guessedWord: 'train', letterMatchCount: 3}]}/>
      
      <div id="guess-words">
        <h3>Try to guess the word</h3>
        
      </div>
    </div>
  );
}

export default App;

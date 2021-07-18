import '../style/App.css';

function App() {
  return (
    <div className="App">
      <h1>Jotto Game</h1>
      <h2>Congratulations!!</h2>
      <form>
        <label for="guess-box">Guess a word</label>
        <input id="guess-box"></input>
        <button type="submit">Submit</button>
      </form>
      <div id="guess-words">
        <h3>Try to guess the word</h3>
        <table>
          <tr>
            <th>Guessed Word</th>
            <th>Matching Letters</th>
          </tr>
          <tr>
            <td>Apple</td>
            <td>0</td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default App;

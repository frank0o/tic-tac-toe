import logo from './logo.svg';
import './App.css';
import {Game} from './Game';

function App() {
  const title = "Tic Tac Toe"

  return (
    <div className="App">
      <header className="App-header">
        <h1>{title}</h1>
      </header>
      <Game/>
      <footer>By Francis Mikula-Quilty</footer>
    </div>
  );
}

export default App;

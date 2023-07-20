import { useState } from 'react';
import './styles.scss';
import Board from './components/Board';
import { calculateWinner } from './winner';

function App() {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(false);

  const winner = calculateWinner(square);

  const nextplayer = isNext ? 'X' : 'O';
  const statusmessage = winner
    ? `winner is ${winner}`
    : `The next player is ${nextplayer};`;
  console.log(statusmessage);
  const handleSquareClick = clickedposition => {
    if (square[clickedposition] != null || winner) {
      console.log(winner);
      return;
    }

    setSquare(currentsquare => {
      return currentsquare.map((curval, indx) => {
        if (clickedposition === indx) {
          return isNext ? 'x' : 'o';
        }

        return curval;
      });
    });
    setIsNext(currisNext => {
      return !currisNext;
    });
  };

  return (
    <div className="app">
      <h2>THE NEXT PLAYER IS {nextplayer}</h2>
      <Board square={square} handleSquareClick={handleSquareClick} />
    </div>
  );
}

export default App;

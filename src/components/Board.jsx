import { useState } from 'react';
import Square from './square';
const Board = () => {
  const [square, setSquare] = useState(Array(9).fill(null));
  const [isNext, setIsNext] = useState(false);

  const handleSquareClick = clickedposition => {
    if (square[clickedposition] != null) {
      return;
    }
    console.log('hello');
    setIsNext(currisNext => {
      return !currisNext;
    });
    setSquare(currentsquare => {
      return currentsquare.map((curval, indx) => {
        if (clickedposition === indx) {
          return isNext ? 'x' : 'o';
        }

        return curval;
      });
    });
  };

  const renderSquare = position => {
    return (
      <Square
        value={square[position]}
        onClick={() => handleSquareClick(position)}
      />
    );
  };
  return (
    <div className="board">
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
};
export default Board;

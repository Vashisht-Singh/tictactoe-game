import { useState } from 'react';
import Square from './square';
const Board = () => {
  const [square, setsquare] = useState(Array(9).fill(null));

  const handleSquareClick = clickedposition => {
    setsquare(currentsquare => {
      return currentsquare.map((curval, indx) => {
        if (clickedposition === indx) {
          return 'X';
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

// Square.jsx
import React from "react";

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export { Square }; // default가 아닌 명시적 export

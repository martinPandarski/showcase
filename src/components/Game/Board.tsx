import React, { useState, useEffect } from "react";
import Square from "./Square";
import "./Game.scss";
import Bolt from "../Bolt";

interface BoardProps {
  aiPlayer: string;
  humanPlayer: string;
}
const initialSquares = Array(9).fill(null);

const Board: React.FC<BoardProps> = ({ aiPlayer, humanPlayer }) => {
  const [squares, setSquares] = useState<(string | null)[]>(initialSquares);
  const [xIsNext, setXIsNext] = useState<boolean>(true);

  useEffect(() => {
    if (!xIsNext && aiPlayer === "O") {
      makeAIMove();
    }
  }, [xIsNext, aiPlayer]);

  const calculateWinner = (squares: (string | null)[]): string | null => {
    const winPatterns: number[][] = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // Rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // Columns
      [0, 4, 8],
      [2, 4, 6], // Diagonals
    ];

    for (const pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }

    if (calculateTie(squares)) {
      return "Tie";
    }

    return null;
  };

  const makeAIMove = (): void => {
    const newSquares: (string | null)[] = squares.slice();
    const aiMove: number = calculateBestMove(newSquares);
    newSquares[aiMove] = aiPlayer;
    setSquares(newSquares);
    setXIsNext(true);
  };

  const calculateBestMove = (board: (string | null)[]): number => {
    const emptyIndices: number[] = [];
    for (let i = 0; i < board.length; i++) {
      if (!board[i]) {
        emptyIndices.push(i);
      }
    }

    let bestMoveScore = -Infinity;
    let bestMove = -1;

    for (const index of emptyIndices) {
      const newBoard = board.slice();
      newBoard[index] = aiPlayer;
      const moveScore = minimax(newBoard, 0, false);

      if (moveScore > bestMoveScore) {
        bestMoveScore = moveScore;
        bestMove = index;
      }
    }

    return bestMove;
  };
  const calculateTie = (board: (string | null)[]): boolean => {
    return board.every((square) => square !== null);
  };

  const minimax = (
    board: (string | null)[],
    depth: number,
    isMaximizing: boolean
  ): number => {
    const winner = calculateWinner(board);
    if (winner === aiPlayer) {
      return 1;
    }
    if (winner === humanPlayer) {
      return -1;
    }
    if (calculateTie(board)) {
      return 0;
    }

    if (isMaximizing) {
      let bestScore = -Infinity;
      for (let i = 0; i < board.length; i++) {
        if (!board[i]) {
          const newBoard = board.slice();
          newBoard[i] = aiPlayer;
          const score = minimax(newBoard, depth + 1, false);
          bestScore = Math.max(bestScore, score);
        }
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (let i = 0; i < board.length; i++) {
        if (!board[i]) {
          const newBoard = board.slice();
          newBoard[i] = humanPlayer;
          const score = minimax(newBoard, depth + 1, true);
          bestScore = Math.min(bestScore, score);
        }
      }
      return bestScore;
    }
  };

  const handleClick = (index: number): void => {
    if (squares[index] || calculateWinner(squares) || !xIsNext) {
      return;
    }

    const newSquares: (string | null)[] = squares.slice();
    newSquares[index] = humanPlayer;
    setSquares(newSquares);
    setXIsNext(false);
  };
  const winner = calculateWinner(squares);
  const status: string =
    winner === "Tie" ? "Tie!" : winner === "O" ? "GAME OVER" : "WELL DONE!";
  return (
    <div className="board-wrap">
      <Bolt className="top-left" />
      <Bolt className="top-right" />
      {winner && (
        <>
          <div className="status">
            <p>{status}</p>
            <button onClick={() => setSquares(initialSquares)}>
              play-again
            </button>
          </div>
        </>
      )}
      <div className="board">
        {squares.map((square, index) => (
          <Square
            key={index}
            value={square}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
      <Bolt className="bottom-left" />
      <Bolt className="bottom-right" />
    </div>
  );
};

export default Board;

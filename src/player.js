/* eslint-disable import/prefer-default-export */
import { gameboard } from "./gameboard.js";

export function player(type) {
  const playerType = type;
  let playerTurn = 0;
  const playerBoard = gameboard();
  const getPlayerTurn = () => playerTurn;

  const incrementPlayerTurn = () => {
    playerTurn += 1;
  };
  const getPlayerBoard = () => playerBoard;
  return {
    getPlayerBoard,
    getPlayerTurn,
    incrementPlayerTurn,
  };
}

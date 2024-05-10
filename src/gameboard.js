/* eslint-disable consistent-return */
/* eslint-disable import/prefer-default-export */
import { ship } from "./ship.js";

export function gameboard() {
  const board = [
    [
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
    ],
    [
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
    ],
    [
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
    ],
    [
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
    ],
    [
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
    ],
    [
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
    ],
    [
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
    ],
    [
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
    ],
    [
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
    ],
    [
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
      ["", 0],
    ],
  ];
  // placeShip helper function
  function checkPlaceValidity(shipLength, column, row, orientation) {
    // check place availability (vertical)
    if (orientation === "vertical") {
      if (row > 9 || shipLength + column > 10) {
        return "Ship out of map boundaries";
      }

      for (let i = column; i < column + shipLength; i += 1) {
        if (board[i][row][0] !== "") {
          return "Place already occupied";
        }
      }
      return true;
    }
    // check place availability (horizontal)
    if (orientation === "horizontal") {
      if (column > 9 || row + shipLength > 10) {
        return "Ship out of map boundaries";
      }

      for (let i = row; i < row + shipLength; i += 1) {
        if (board[column][i][0] !== "") {
          return "Place already occupied";
        }
      }
      return true;
    }
  }

  function placeShip(shipLength, column, row, orientation) {
    const newShip = ship(shipLength);
    if (orientation === "vertical") {
      const positionValidity = checkPlaceValidity(
        shipLength,
        column,
        row,
        orientation
      );
      if (positionValidity === true) {
        for (let i = column; i < column + shipLength; i += 1) {
          board[i][row][0] = newShip;
        }
      } else {
        return positionValidity;
      }
    } else if (orientation === "horizontal") {
      const positionValidity = checkPlaceValidity(
        shipLength,
        column,
        row,
        orientation
      );
      if (positionValidity === true) {
        for (let i = row; i < row + shipLength; i += 1) {
          board[column][i][0] = newShip;
        }
      } else {
        return positionValidity;
      }
    } else {
      return "Wrong orientation";
    }
  }

  const getBoard = () => board;
  return {
    placeShip,
    getBoard,
  };
}

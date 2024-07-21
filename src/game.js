import { gameboard } from "./gameboard.js";
import { ship } from "./ship.js";
import { renderBoard } from "./render.js";
import { player } from "./player.js";

const placeBoard = document.getElementById("placeGameboard");
const newPlayer = player("you");
// newPlayer.getPlayerBoard().placeShip(4, 2, 3, "vertical");
// newPlayer.getPlayerBoard().receiveAttack(3, 3);
// newPlayer.getPlayerBoard().receiveAttack(5, 6);

renderBoard(newPlayer, placeBoard, "placeShips");

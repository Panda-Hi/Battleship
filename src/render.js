import { gameboard } from "./gameboard.js";
import { ship } from "./ship.js";
import { player } from "./player.js";

const shipsToPlace = [
  { length: 5 },
  { length: 4 },
  { length: 3 },
  { length: 3 },
  { length: 2 },
];
let shipsPlaced = 0;
let rotate = "vertical";
// rotate button functionality
document.getElementById("rotateBtn").addEventListener("click", () => {
  rotate = rotate === "vertical" ? "horizontal" : "vertical";
});
export function renderBoard(player, boardPlace, useCase) {
  boardPlace.innerText = "";

  for (let i = 0; i <= 9; i++) {
    for (let j = 0; j <= 9; j++) {
      const column = i;
      const row = j;
      const coordinates = "" + column + row;
      const newDiv = document.createElement("div");
      newDiv.setAttribute("data-id", coordinates);

      const isPlaceHitAndOccupied =
        player.getPlayerBoard().getBoard()[i][j][1] === 1 &&
        typeof player.getPlayerBoard().getBoard()[i][j][0] === "object";
      const isPlaceOccupied =
        player.getPlayerBoard().getBoard()[i][j][0] !== "";
      const isPlaceEmpty = player.getPlayerBoard().getBoard()[i][j][1] === 1;
      // adding style
      if (isPlaceHitAndOccupied) {
        newDiv.setAttribute("id", "shipHit");
      } else if (isPlaceOccupied) {
        newDiv.setAttribute("id", "ship");
      } else if (isPlaceEmpty) {
        newDiv.setAttribute("id", "emptyHit");
      }
      switch (useCase) {
        case "placeShips":
          newDiv.addEventListener("mouseover", () => {
            // delete previous hover style effect
            const divs = boardPlace.getElementsByTagName("div");

            for (let area of divs) {
              if (area.id === "placeShipHover") {
                area.removeAttribute("id");
              }
            }

            if (shipsPlaced >= 5) {
              document.getElementById("placeView").style.display = "none";
            }
            const isPlaceGood = player
              .getPlayerBoard()
              .checkPlaceValidity(
                shipsToPlace[shipsPlaced].length,
                column,
                row,
                rotate
              );
            // console.log(isPlaceGood);
            // hover effect for fields
            if (isPlaceGood === true) {
              if (rotate === "horizontal") {
                for (let i = 0; i < shipsToPlace[shipsPlaced].length; i += 1) {
                  document
                    .querySelector(`[data-id='${column}${row + i}']`)
                    .setAttribute("id", "placeShipHover");

                  // console.log(`[data-id='${column}${row + i}']`);
                }
              } else {
                for (let i = 0; i < shipsToPlace[shipsPlaced].length; i += 1) {
                  document
                    .querySelector(`[data-id='${column + i}${row}']`)
                    .setAttribute("id", "placeShipHover");

                  // console.log(`[data-id='${column}${row + i}']`);
                }
              }
            }
            // place ship
            newDiv.addEventListener("click", () => {
              if (
                player
                  .getPlayerBoard()
                  .checkPlaceValidity(
                    shipsToPlace[shipsPlaced].length,
                    column,
                    row,
                    rotate
                  ) === true
              ) {
                player
                  .getPlayerBoard()
                  .placeShip(
                    shipsToPlace[shipsPlaced].length,
                    column,
                    row,
                    rotate
                  );
                shipsPlaced++;
                console.log(shipsPlaced);
                renderBoard(player, boardPlace, useCase);
              }
            });

            // zrobic rotate buttona i znikanie planszy
          });
          break;
        case "you":
          console.log("you");
          break;
        case "computer":
          console.log("computer");
          break;
      }
      boardPlace.appendChild(newDiv);

      //po renderze pol switch dodajacy event listenery na podstawie use case I ogarnac rotate buttona
    }
  }
}
// setTimeout(renderBoard(newPlayer, placeBoard, "placeShips"), "2000");

import { gameboard } from "../src/gameboard";
// npm test gameboard.test.js
describe("test placeShip()", () => {
  let testGameboard;
  beforeEach(() => {
    testGameboard = gameboard();
  });
  it("place ship vertically", () => {
    testGameboard.placeShip(3, 3, 1, "vertical");

    expect(testGameboard.getBoard()[3][1][0]).toBeInstanceOf(Object);
    expect(testGameboard.getBoard()[4][1][0]).toBeInstanceOf(Object);
    expect(testGameboard.getBoard()[5][1][0]).toBeInstanceOf(Object);
  });
  it("return place already occupied (vertical)", () => {
    testGameboard.placeShip(4, 2, 1, "vertical");
    expect(testGameboard.placeShip(4, 4, 1, "vertical")).toBe(
      "Place already occupied"
    );
  });
  it("return ship out of map boundaries (vertical)", () => {
    expect(testGameboard.placeShip(4, 8, 1, "vertical")).toBe(
      "Ship out of map boundaries"
    );
  });
  it("orientation spelled wrong", () => {
    expect(testGameboard.placeShip(4, 2, 2, "overticul")).toBe(
      "Wrong orientation"
    );
  });

  it("place ship horizontally", () => {
    testGameboard.placeShip(4, 2, 1, "horizontal");

    expect(testGameboard.getBoard()[2][1][0]).toBeInstanceOf(Object);
    expect(testGameboard.getBoard()[2][2][0]).toBeInstanceOf(Object);
    expect(testGameboard.getBoard()[2][3][0]).toBeInstanceOf(Object);
    expect(testGameboard.getBoard()[2][4][0]).toBeInstanceOf(Object);
  });
  it("return place already occupied (horizontal) ", () => {
    testGameboard.placeShip(4, 2, 1, "horizontal");
    expect(testGameboard.placeShip(4, 2, 1, "horizontal")).toBe(
      "Place already occupied"
    );
  });
  it("return ship out of map boundaries (horizontal)", () => {
    expect(testGameboard.placeShip(4, 2, 7, "horizontal")).toBe(
      "Ship out of map boundaries"
    );
  });
});

describe("test receiveAttack()", () => {
  let testGameboard;
  beforeEach(() => {
    testGameboard = gameboard();
  });
  it("mark empty cell as hit", () => {
    expect(testGameboard.getBoard()[6][5][1]).toBe(0);
    testGameboard.receiveAttack(6, 5);
    expect(testGameboard.getBoard()[6][5][1]).toBe(1);
  });
  it("mark ship cell as hit + ship hitNumber+1", () => {
    testGameboard.placeShip(4, 6, 8, "vertical");
    testGameboard.receiveAttack(6, 8);
    expect(testGameboard.getBoard()[6][8][0].getHitNumber()).toBe(1);
    expect(testGameboard.getBoard()[7][8][0].getHitNumber()).toBe(1);
    expect(testGameboard.getBoard()[6][8][1]).toBe(1);
  });
  it("Wrong coordinates", () => {
    expect(testGameboard.receiveAttack(9, 1)).not.toBe("Wrong coordinates");
    expect(testGameboard.receiveAttack(9, 10)).toBe("Wrong coordinates");
  });
  it("are all ships sunk (false)", () => {
    testGameboard.placeShip(3, 2, 1, "horizontal");
    testGameboard.placeShip(2, 3, 5, "vertical");
    expect(testGameboard.areAllShipsSunk()).toBeFalsy();
  });
  it("are all ships sunk (true)", () => {
    testGameboard.placeShip(3, 2, 1, "horizontal");
    testGameboard.placeShip(2, 3, 5, "vertical");
    testGameboard.receiveAttack(2, 1);
    testGameboard.receiveAttack(2, 2);
    testGameboard.receiveAttack(2, 3);

    testGameboard.receiveAttack(3, 5);
    testGameboard.receiveAttack(4, 5);
    expect(testGameboard.areAllShipsSunk()).toBeTruthy();
  });
});

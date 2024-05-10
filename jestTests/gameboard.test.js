import { gameboard } from "../src/gameboard";
// npm test gameboard.test.js
describe("test gameboard placeShip()", () => {
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

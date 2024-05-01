import { ship } from "../src/ship";

describe("test ship factory function", () => {
  let testShip;
  beforeEach(() => {
    testShip = ship(4);
  });
  it("getShipLength should return declared ship length", () => {
    expect(testShip.getShipLength()).toBe(4);
  });
  it("hit() must increase hitNumber by 1", () => {
    testShip.hit();
    expect(testShip.getHitNumber()).toBe(1);
  });
  it("hit() should not increase when hit number === length", () => {
    testShip.hit();
    testShip.hit();
    testShip.hit();
    testShip.hit();
    testShip.hit();
    expect(testShip.getHitNumber()).toBe(4);
  });

  it("isSunk() should return true", () => {
    testShip.hit();
    testShip.hit();
    testShip.hit();
    testShip.hit();
    expect(testShip.isSunk()).toBe(true);
  });
  it("isSunk() should return false", () => {
    testShip.hit();
    testShip.hit();
    testShip.hit();
    expect(testShip.isSunk()).toBe(false);
  });
});

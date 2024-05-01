import { ship } from "../src/ship";

it("one", () => {
  const val = ship();
  expect(val).toBe(1);
});

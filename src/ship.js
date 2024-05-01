/* eslint-disable import/prefer-default-export */
export function ship(length) {
  const shipLength = length;
  let hitNumber = 0;
  const hit = () => {
    if (hitNumber < shipLength) {
      hitNumber += 1;
    }
  };
  const isSunk = () => hitNumber === shipLength;
  const getHitNumber = () => hitNumber;
  const getShipLength = () => shipLength;
  return {
    hit,
    isSunk,
    getHitNumber,
    getShipLength,
  };
}

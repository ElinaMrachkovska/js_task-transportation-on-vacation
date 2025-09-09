/**
 * @param {number} days
 *
 * @return {number}
 */
function calculateRentalCost(days) {
  let result = 0;
  const rentDay = 40;
  const sum = rentDay * days;

  if (days >= 7) {
    result = sum - 50;
  } else if (days >= 3) {
    result = sum - 20;
  } else {
    return sum;
  }

  return result;
}

module.exports = calculateRentalCost;

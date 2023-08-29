const [addNums, addManyNums] = require("./phase-1");

// Runs `addNums` in 10 increasing increments
function addNums10(increment) {
  const results = [];
  for (let i = increment; i <= 10 * increment; i += increment) {
    results.push(addNums(i));
  }
  return results;
}

// Runs `addManyNums` in 10 increasing increments
function addManyNums10(increment) {
  const results = [];
  for (let i = increment; i <= 10 * increment; i += increment) {
    results.push(addManyNums(i));
  }
  return results;
}

module.exports = [addNums10, addManyNums10];

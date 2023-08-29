
const [addNums, addManyNums] = require("./phase-1");

function addNums10Timing(increment) {
  const results = [];
  for (let i = increment; i <= 10 * increment; i += increment) {
    const startTime = Date.now();
    const result = addNums(i);
    const endTime = Date.now();
    results.push({ n: i, result, time: endTime - startTime });
  }
  return results;
}

function addManyNums10Timing(increment) {
  const results = [];
  for (let i = increment; i <= 10 * increment; i += increment) {
    const startTime = Date.now();
    const result = addManyNums(i);
    const endTime = Date.now();
    results.push({ n: i, result, time: endTime - startTime });
  }
  return results;
}

n = 1000000
console.log(`addNums(${n}): `);
addNums10Timing(1000000);

console.log("\n***********\n");

n = 1000
console.log(`addManyNums(${n}): `);
addManyNums10Timing(5000);

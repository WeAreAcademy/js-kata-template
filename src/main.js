//Import functions and constants from modules in "common-js" format.
//This is outdated but still common.  Not used in TypeScript.
const { sum } = require("./sum");

console.log("sum is ", sum(10, 20));
console.log("This is main.js.");
console.log("You should probably use `yarn test` or `yarn test --watchAll`");

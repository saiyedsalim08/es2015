// Rest / Spread Operator Exercises
// Given this function:

function filterOutOdds() {
  var nums = Array.prototype.slice.call(arguments);
  return nums.filter(function(num) {
    return num % 2 === 0
  });
}

//* Write an ES2015 Version */

const filterOutOdds = (...nums) => nums.filter(num => num % 2 === 0)

// findMin Write a function called findMin that accepts a variable number of arguments and returns the smallest argument.

// Make sure to do this using the rest and spread operator.

//* Write an ES2015 Version */

const findMin = (...nums) => Math.min(...nums)

// mergeObjects
// Write a function called mergeObjects that accepts two objects and returns a new object which contains all the keys and values of the first object and second object.

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})
mergeObjects({a:1, b:2}, {c:3, d:4}) 

// doubleAndReturnArgs
// Write a function called doubleAndReturnArgs which accepts an array and a variable number of arguments. The function should return a new array with the original array values and all of additional arguments doubled.

const doubleAndReturnArgs = (arr, ...args) => [...arr, ...args.map(v => v * 2)]
doubleAndReturnArgs([1,2,3],4,4) 
doubleAndReturnArgs([2],10,4) 
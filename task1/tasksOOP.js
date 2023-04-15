// Task 1
// add (min) function to the prototype of array
// min should return the smallest value in array of integers

Array.prototype.min = function () {
  let smallest = this[0];
  for (let i = 1; i < this.length; i++) {
    if (this[i] < smallest) {
      smallest = this[i];
    }
  }
};
let arr = [1, 2, 3, 4, 5, 6, 7];
console.log(arr.min());

// task2
// add (customFilter) function to the protype of array
// customFilter should return only items that pass its callback in new array

// Array.prototype.cuntomFilter = function (callback) {
//   const arr = [];
//   for (let i = 0; i < this.length; i++) {
//     if (callback(this[i])) {
//       arr.push(this[i]);
//     }
//   }
//   return arr;
// };

// task3
// Array.prototype.cuntomFill = function (value) {
//   let arr = [];
//   for (let i = 0; i < this.length; i++) {
//     arr.push(value);
//   }
//   return arr;
// };

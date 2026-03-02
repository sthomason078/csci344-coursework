const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use filter to create a new array with only even numbers
// Your code here
const evens = numbers.filter(number => number % 2 === 0);

// Test your code
console.log(evens);  // Should print [2, 4, 6, 8, 10]
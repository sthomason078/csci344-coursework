const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Chain filter and map:
// 1. Filter to get only even numbers
// 2. Map to multiply each by 3
// Your code here
const result = numbers.filter(number => number % 2 === 0).map(number => number * 3);

// Test your code
console.log(result);  // Should print [6, 12, 18, 24, 30]
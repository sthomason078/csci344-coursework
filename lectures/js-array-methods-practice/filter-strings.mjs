const words = ["apple", "banana", "cherry", "date", "elderberry"];

// Use filter to create a new array with only words longer than 5 characters
// Your code here
const longWords = words.filter(word => word.length > 5);

// Test your code
console.log(longWords);  // Should print ["banana", "cherry", "elderberry"]
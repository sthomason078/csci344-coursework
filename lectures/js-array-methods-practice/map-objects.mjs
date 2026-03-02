const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

// Use map to create a new array with just the names
// Your code here
const names = people.map(person => person.name);

// Test your code
console.log(names);  
// Should print ["Alice", "Bob", "Charlie"]
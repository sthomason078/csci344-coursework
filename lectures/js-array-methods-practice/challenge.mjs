const students = [
    { name: "Alice", score: 85, grade: "B" },
    { name: "Bob", score: 92, grade: "A" },
    { name: "Charlie", score: 78, grade: "C" },
    { name: "Diana", score: 95, grade: "A" },
    { name: "Eve", score: 88, grade: "B" }
];

// 1. Use filter to get only students with grade "A"
// 2. Use map to get just their names
// 3. Use join to create a comma-separated string of names
// Your code here
const gradeANames = students
    .filter(student => student.grade === "A")
    .map(student => student.name)
    .join(", ");

// Test your code
console.log(gradeANames);  // Should print "Bob, Diana"
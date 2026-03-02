const todos = [
    { text: "Buy groceries", completed: false },
    { text: "Finish homework", completed: true },
    { text: "Call mom", completed: false },
    { text: "Read JavaScript documentation", completed: true },
    { text: "Go to the gym", completed: false },
    { text: "Write blog post", completed: true },
    { text: "Clean the house", completed: false },
    { text: "Prepare presentation", completed: true },
    { text: "Walk the dog", completed: false },
    { text: "Review code changes", completed: true }
];

// Use filter to create a new array with only completed todos
// Your code here
const completedTodos = todos.filter(todo => todo.completed);

// Test your code
console.log(completedTodos);  // Should print an array with 5 completed todos
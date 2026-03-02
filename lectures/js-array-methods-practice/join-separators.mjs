const items = ["apple", "banana", "cherry"];

// Use join with a comma and space
const commaList = items.join(", ");
console.log(commaList);  // Should print "apple, banana, cherry"

// Use join with a dash
const dashList = items.join("-");
console.log(dashList);  // Should print "apple-banana-cherry"

// Use join with no separator (empty string)
const noSeparator = items.join("");
console.log(noSeparator);  // Should print "applebananacherry"
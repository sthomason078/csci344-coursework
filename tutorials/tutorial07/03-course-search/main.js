// 1. Global Variables
let searchTerm = "";
let openOnly = false;

// 2. Helper Functions
function isClassFull(course) {
    // Return true if course.Classification.Open === false
    return !course.Classification.Open;
}

function doesTermMatch(course) {
    // If searchTerm is empty, return true (show all courses)
    if (searchTerm === "") return true;

    // Convert searchTerm to lowercase
    searchTerm.toLowerCase();

    // Check if searchTerm appears in (all converted to lowercase):
    //   - course.Code
    //   - course.Title
    //   - course.CRN (convert to string first)
    //   - course.Instructors[].Name (use map to get all names, then join)
    // Use includes() for case-insensitive matching
    // Return true if searchTerm matches any of these fields
    const code = course.Code.toLowerCase();
    const title = course.Title.toLowerCase();
    const CRN = course.CRN.toString();
    const instructors = course.Instructors.map(instructor => instructor.Name).join("").toLowerCase();

    return (
        code.includes(searchTerm) ||
        title.includes(searchTerm) ||
        CRN.includes(searchTerm) ||
        instructors.includes(searchTerm)
    );
}

function dataToHTML(course) {
    // should return a formatted HTML card with the relevant course info
    // (using template literals).
    return `
        <section class="course-card">
            <h2>CSCI 183.001: Intro to Programming: Data Science</h2>
            <p class="status open">
                <i class="fa-solid fa-circle-check"></i>
                Open &bull; 10320 &bull; Seats Available: 14
            </p>
            <p>
                MWF &bull; ZEI 201&bull; 3 credit hour(s)
            </p>
            <p>
                <strong>Sarris, Michael</strong>
            </p>
        </section>
    `;
}

// 3. Main Functions
function showMatchingCourses() {
    // 1. Get the .courses container element
    // 2. Clear it
    // 3. Start with courseList (from course-data.js)
    // 4. Apply the filters and store the matched courses in a variable
    // 5. If no courses match, display "No courses match your search." and return
    // 6. Output each course to the .courses container (forEach + insertAdjacentHTML)
}

function filterCourses() {
    // Update global variables (searchTerm and openOnly) by
    // reaching into the DOM and retrieving their values
    // Invoke the showMatchingCourses() function
}

// 4. Initial Render
// show all courses initially:
showMatchingCourses();
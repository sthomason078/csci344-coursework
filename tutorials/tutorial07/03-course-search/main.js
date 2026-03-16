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
    const instructors = course.Instructors.map(instructor => instructor.Name).join(" ").toLowerCase();

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

    // do not display data when the value is null
    const days = course.Days !== null ? `${course.Days} &bull; ` : "";
    const location = course.Location.FullLocation !== null ? `${course.Location.FullLocation} &bull; ` : "";

    const seatsAvailable = () => {
        if (isClassFull(course))
            return `Number on Waitlist: ${course.WaitlistAvailable}`;
        else
            return `Seats Available: ${course.EnrollmentMax - course.EnrollmentCurrent}`;
    }

    return `
        <section class="course-card">
            <h2>${course.Code}: ${course.Title}</h2>
            <p class="status ${isClassFull(course) ? "closed" : "open"}">
                <i class="fa-solid ${isClassFull(course) ? "fa-circle-xmark" : "fa-circle-check"}"></i>
                ${isClassFull(course) ? "Closed" : "Open"} &bull; ${course.CRN} &bull; ${seatsAvailable()}
            </p>
            <p>
                ${days}${location}${course.Hours} credit hour${course.Hours === 1 ? "" : "s"}
            </p>
            <p>
                <strong>${course.Instructors.map(instructor => instructor.Name).join(" &bull; ")}</strong>
            </p>
        </section>
    `;
}

// 3. Main Functions
function showMatchingCourses() {
    // 1. Get the .courses container element
    const coursesEl = document.querySelector(".courses");
    // 2. Clear it
    coursesEl.innerHTML = "";
    // 3. Start with courseList (from course-data.js)
    // 4. Apply the filters and store the matched courses in a variable
    const filteredCourseList = courseList.filter(course => doesTermMatch(course) && (openOnly ? !isClassFull(course) : true));
    // 5. If no courses match, display "No courses match your search." and return
    if (filteredCourseList.length === 0) {
        coursesEl.innerHTML = "No courses match your search.";
        return;
    }
    // 6. Output each course to the .courses container (forEach + insertAdjacentHTML)
    filteredCourseList.forEach(course => {
        coursesEl.insertAdjacentHTML("beforeend", dataToHTML(course));
    });
}

function filterCourses() {
    // Update global variables (searchTerm and openOnly) by
    // reaching into the DOM and retrieving their values
    searchTerm = document.querySelector("#search_term").value;
    openOnly = document.querySelector("#is_open").checked;
    // Invoke the showMatchingCourses() function
    showMatchingCourses();
}

// 4. Initial Render
// show all courses initially:
showMatchingCourses();
let currentPosition = 0; // define the position of the carousel (0 means all the way to the left, with the first two images visible)
let gap = 10;           // define the width of the gap between the images (used for a calculation later)
const slideWidth = 400; // define the width of the images (used for a calculation later)

// moveCarousel() runs when the user clicks the "Forward" button or the "Back" button (see index.html)
function moveCarousel(direction) {
    const items = document.querySelectorAll(".carousel-item"); // an array of all elements with the carousel-item class (the images)

    if (direction == "forward") { // the "Forward" button was clicked
        if (currentPosition >= items.length - 2) { // minus 2 b/c first 2 slides already showing
            return false; // exit the if-else statement if the carousel cannot be moved forward (the rightmost image is already visible)...
        }
        currentPosition++; // ...otherwise, move the carousal forward by one
    } else { // the "Back" button was clicked (direction == "backward")
        if (currentPosition == 0) {
            return false; // exit the if-else statement if the carousel cannot be moved backward (the leftmost image is already visible)...
        }
        currentPosition--; // ...otherwise, move the carousel backward by one
    }

    // calculate the new horizontal position of the carousel in pixels using the position variable and the gap and image widths defined at the start
    const offset = (slideWidth + gap) * currentPosition;

    for (const item of items) { // loop through the image elements...
        item.style.transform = `translateX(-${offset}px)`; /// ...and apply a CSS style that offsets their horizontal position using the calculation above
    }

    // At this point, the carousel has either been moved according to the button that was clicked, or not moved if doing so would go outside the bounds of the carousel.
    // Yippee!
}

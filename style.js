// Define a variable to keep track of the current slide index
var currentSlideIndex = 0;

// Function to slide the stories to the right
function slideRight() {
    var slides = document.querySelectorAll('.successSlide');
    // Check if there are any slides
    if (slides.length > 0) {
        // Hide the current slide
        slides[currentSlideIndex].style.display = 'none';
        // Increment the slide index
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        // Show the next slide
        slides[currentSlideIndex].style.display = 'block';
    }
}

// Function to slide the stories to the left
function slideLeft() {
    var slides = document.querySelectorAll('.successSlide');
    // Check if there are any slides
    if (slides.length > 0) {
        // Hide the current slide
        slides[currentSlideIndex].style.display = 'none';
        // Decrement the slide index
        currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
        // Show the previous slide
        slides[currentSlideIndex].style.display = 'block';
    }
}

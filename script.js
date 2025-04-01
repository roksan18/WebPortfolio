let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const container = document.querySelector(".carousel-container");

function moveSlide(direction) {
    // Ensure correct transition direction for the container
    container.style.transition = "transform 0.5s ease-in-out";

    // Update index
    let nextIndex = currentIndex + direction;

    if (nextIndex < 0) {
        nextIndex = totalSlides - 1; // Go to last slide
    } else if (nextIndex >= totalSlides) {
        nextIndex = 0; // Go to first slide
    }

    // Move carousel (always in the correct direction)
    container.style.transform = `translateX(-${nextIndex * 100}%)`;

    // Hide text before transition
    slides[currentIndex].classList.remove("active");

    // Update current index AFTER the transition
    setTimeout(() => {
        currentIndex = nextIndex;
        slides[currentIndex].classList.add("active");
    }, 500); // 500ms matches slide transition
}

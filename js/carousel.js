//Services
const carousel_services = document.querySelector(".background-carousel .carousel");
const left_arrow_services = document.querySelector(".background-carousel .left-arrow");
const right_arrow_services = document.querySelector(".background-carousel .right-arrow");

function scroll_animation(carousel,scroll,i) {
    if (i < 75) {
        setTimeout(() => {
            scroll_animation(carousel, scroll, i + 1);    
        }, 6);//60fps
    }
    carousel.scrollLeft += scroll;
}

left_arrow_services.addEventListener("click", () => {
    scroll_animation(carousel_services,-5, 0);
});

right_arrow_services.addEventListener("click", () => {
    scroll_animation(carousel_services,5, 0);
});

//Feedback
const carousel_feedback = document.querySelector(".feedback-carousel .carousel");
const left_arrow_feedback = document.querySelector(".carousel-block .left-arrow");
const right_arrow_feedback = document.querySelector(".carousel-block .right-arrow");

carousel_feedback.scrollLeft += 5000;

left_arrow_feedback.addEventListener("click", () => {
    scroll_animation(carousel_feedback,-5, 0);
});

right_arrow_feedback.addEventListener("click", () => {
    scroll_animation(carousel_feedback,5, 0);
});
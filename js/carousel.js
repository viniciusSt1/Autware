carousel = document.querySelector(".carousel");
left_arrow = document.querySelector(".background-carousel .left-arrow");
right_arrow = document.querySelector(".background-carousel .right-arrow");

function scroll_animation(scroll, i) {
    if (i < 75) {
        setTimeout(() => {
            scroll_animation(scroll, i + 1);    
        }, 6);//60fps
    }
    carousel.scrollLeft += scroll;
}

left_arrow.addEventListener("click", () => {
    scroll_animation(-5, 0);
});

right_arrow.addEventListener("click", () => {
    scroll_animation(5, 0);
});

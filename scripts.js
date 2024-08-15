document.addEventListener("DOMContentLoaded", function() {
    const slider = document.getElementById("slider");
    const sliderItems = slider.children.length;
    const itemWidth = slider.querySelector("li").offsetWidth;
    let currentIndex = 0;

    document.getElementById("prev").addEventListener("click", function() {
        if (currentIndex > 0) {
            currentIndex--;
            slider.style.marginLeft = `-${itemWidth * currentIndex}px`;
        }
    });

    document.getElementById("next").addEventListener("click", function() {
        if (currentIndex < sliderItems - 1) {
            currentIndex++;
            slider.style.marginLeft = `-${itemWidth * currentIndex}px`;
        }
    });
});

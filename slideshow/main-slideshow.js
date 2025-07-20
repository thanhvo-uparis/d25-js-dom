const slidesList = document.querySelectorAll(".slide");
const btnList = document.querySelectorAll(".btn-action");
let currentSlide = 0;

function showSlide(index) {
    slidesList.forEach(slide => slide.classList.remove("active"));
    slidesList[index].classList.add("active");
}

if (slidesList.length > 0) {
    showSlide(currentSlide);
}

btnList.forEach(btn => {
    btn.addEventListener("click", function() {
        if (btn.classList.contains("next")) {
            currentSlide = (currentSlide + 1) % slidesList.length;
            showSlide(currentSlide);
        } else if (btn.classList.contains("prev")) {
            currentSlide = ((currentSlide - 1 + slidesList.length) % slidesList.length);
            showSlide(currentSlide);
        }
    }) 
})
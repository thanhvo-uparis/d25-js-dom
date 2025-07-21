const slidesList = document.querySelectorAll(".slide");
const btnList = document.querySelectorAll(".btn-action");
const pagiDot =document.querySelector(".pagination");
const dotsList = document.querySelectorAll(".dot");
let currentSlide = 0;

function showSlide(index) {
    slidesList.forEach(slide => slide.classList.remove("active"));
    slidesList[index].classList.add("active");
}

if (slidesList.length > 0 && dotsList.length > 0) {
    showSlide(currentSlide);
    uploadSlide(currentSlide);
}

btnList.forEach(btn => {
    btn.addEventListener("click", function() {
        if (btn.classList.contains("next")) {
            currentSlide = (currentSlide + 1) % slidesList.length;
            showSlide(currentSlide);
            uploadSlide(currentSlide);
        } else if (btn.classList.contains("prev")) {
            currentSlide = ((currentSlide - 1 + slidesList.length) % slidesList.length);
            showSlide(currentSlide);
            uploadSlide(currentSlide);
        }
    }) 
});

dotsList.forEach((dot, index) => {
    dot.addEventListener("click", function(event) {
        const dotSelected = event.target.closest(".dot");
        if (dotSelected) {
            showSlide(index);
            uploadSlide(index);
        }
        
    })
})

// upload current slide for dot
function uploadSlide(index) {
    dotsList.forEach(slide => slide.classList.remove("active"));
    dotsList[index].classList.add("active");
}
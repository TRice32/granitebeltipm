const testimonial = document.querySelectorAll(".testimonial")
const dots = document.querySelectorAll(".dot")
const next = document.querySelector(".next")
const prev = document.querySelector(".prev")
let time = 8000;
let arrow;
// let newArray = [...testimonial]
// let newfunct = testimonial.forEach((a) => console.log(a)); 
// console.log(newArray);

let slideIndex = 0;
showSlides(0);

next.addEventListener("click", function() {
    slideIndex += 1
    showSlides(slideIndex)
    pauseSlides()
}) 

prev.addEventListener("click", function() {
    slideIndex -= 1
    showSlides(slideIndex)
    pauseSlides()
}) 

dots.forEach(dot => dot.addEventListener("click", function(e) {
    slideIndex = Number(e.target.id);
    showSlides(slideIndex);
    e.target.classList.add("dotHighlight")
    pauseSlides()
}))

document.addEventListener('keydown', function(e) {
    if (e.key == "ArrowRight") {
        slideIndex += 1;
        pauseSlides()
        console.log(time);
    }
    if (e.key == "ArrowLeft") {
        slideIndex -= 1;
        pauseSlides()
    }
   showSlides(slideIndex)
  })

function showSlides(i) {

    dots.forEach(dot => dot.classList.remove("dotHighlight"))
    if (i < 1) {
        slideIndex = testimonial.length
    }
    if (i > testimonial.length) {
        slideIndex = 1
    }
    for (let i = 0; i < testimonial.length; i++) {
        testimonial[i].style.display = "none";
    }
    testimonial[slideIndex - 1].style.display = "grid";
    dots[slideIndex - 1].classList.add("dotHighlight")
    
};

function pauseSlides() {
    return time = 15000;
}

let playSlides = setInterval(() => {
    slideIndex > 3 ? slideIndex = 1 :slideIndex += 1
    showSlides();
}, time)
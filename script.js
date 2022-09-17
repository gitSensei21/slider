const slides = document.querySelectorAll('.slide');


slides.forEach(btn => {
    btn.addEventListener("click", () => {
        clearActiveClasses()

        btn.classList.add('active')
    })
});

function clearActiveClasses(params) {
    slides.forEach((slide) => {
        slide.classList.remove('active')
    })
}
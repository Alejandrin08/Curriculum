const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        } else {
            entry.target.classList.remove("visible");
        }
    });
}, { threshold: 0.1 }); 

document.querySelectorAll('.section-slider-info').forEach(card => {
    observer.observe(card);
});

document.querySelectorAll('.section-skills').forEach(card => {
    observer.observe(card);
});

function scrollToSection() {
    document.getElementById("section-id").scrollIntoView({ behavior: "smooth" });
}
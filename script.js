const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    const trigger = window.innerHeight / 1.3;

    if (sectionTop < trigger) {
      section.classList.add("show");
    }
  });
});
const text = "Frontend Developer | JavaScript | API Integration";
let i = 0;

function typeEffect() {
  if (i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeEffect, 50);
  }
}

typeEffect();

document.addEventListener("DOMContentLoaded", () => {

  // SCROLL ANIMATION
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

  // TYPING EFFECT
  const text = "Frontend Developer | JavaScript | API Integration";
  let i = 0;
  const typingElement = document.getElementById("typing");

  function typeEffect() {
    if (i < text.length) {
      typingElement.innerHTML += text.charAt(i);
      i++;
      setTimeout(typeEffect, 50);
    }
  }

  typingElement.innerHTML = ""; // clear first
  typeEffect();

});

document.addEventListener("DOMContentLoaded", () => {

  /* =============================
     SCROLL ANIMATION (IMPROVED)
  ============================= */

  const sections = document.querySelectorAll("section");

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // runs once (better performance)
      }
    });
  }, {
    threshold: 0.15
  });

  sections.forEach(section => {
    observer.observe(section);
  });


  /* =============================
     TYPING EFFECT (SMOOTH + SAFE)
  ============================= */

  const typingElement = document.getElementById("typing");

  if (typingElement) {
    const text = "Building real-world web apps | JavaScript | APIs | Problem Solver";
    let index = 0;

    function typeEffect() {
      if (index < text.length) {
        typingElement.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, 60);
      }
    }

    typingElement.textContent = "";
    typeEffect();
  }

});
const text = "Building real-world web apps | JavaScript | APIs | Problem Solver";

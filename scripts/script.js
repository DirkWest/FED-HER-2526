// Even testen :)
console.log("hi");

// JavaScript voor de uitklapbare teksten op de bankrekening pagina.
document.addEventListener("DOMContentLoaded", () => {
  const knoppen = document.querySelectorAll(".knopJS1");

  knoppen.forEach((knop) => {
    knop.addEventListener("click", () => {
      const li = knop.closest("li");
      const teksten = li.querySelectorAll("p.uitklap1");

      teksten.forEach((p) => p.classList.toggle("zichtbaar"));

      const label = knop.querySelector(".label");
      const plusIcon = knop.querySelector(".iconplus");
      const minIcon = knop.querySelector(".iconmin");

      const isOpen = Array.from(teksten).some((p) =>
        p.classList.contains("zichtbaar"),
      );

      if (isOpen) {
        label.textContent = "Sluit";
        plusIcon.style.display = "none";
        minIcon.style.display = "inline";
      } else {
        label.textContent = "Open";
        plusIcon.style.display = "inline";
        minIcon.style.display = "none";
      }
    });
  });
});


// Javascript voor de opmaak van de stipjes op de bankrekening pagina.
const stipjes = document.querySelectorAll(".stip");
const items = document.querySelectorAll(".andereProducten li");

const observerOptions = {
  root: document.querySelector(".andereProducten"),
  threshold: 0.6,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const index = Array.from(items).indexOf(entry.target);

      stipjes.forEach((stip, i) => {
        stip.classList.toggle("active", i === index);
      });
    }
  });
}, observerOptions);

items.forEach((item) => observer.observe(item));


// JavaScript voor het hamburgermenu
const hamburgerKnop = document.querySelector(".hamburger");
const menuInhoud = document.querySelector(".hamburgerInhoud");

hamburgerKnop.addEventListener("click", () => {
  menuInhoud.classList.toggle("active");
});

// JavaScript Document
console.log("hi");

document.addEventListener("DOMContentLoaded", () => {
  const knoppen = document.querySelectorAll('.knopJS1');

  knoppen.forEach(knop => {
    knop.addEventListener('click', () => {
      const li = knop.closest('li');
      const teksten = li.querySelectorAll('p.uitklap1'); // alleen de uitklap teksten

      // Toggle zichtbaar voor alle p's in dit li
      teksten.forEach(p => p.classList.toggle('zichtbaar'));

      // Iconen en label aanpassen
      const label = knop.querySelector('.label');
      const plusIcon = knop.querySelector('.iconplus');
      const minIcon = knop.querySelector('.iconmin');

      const isOpen = Array.from(teksten).some(p => p.classList.contains('zichtbaar'));

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

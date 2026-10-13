const texts = [document.querySelector("#copenhagen"), document.querySelector("#tuscany"), document.querySelector("#sanne")];

const delayBetween = 1100; // ms between each text starting to fade in

window.addEventListener("load", () => {
  texts.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add("visible");
    }, index * delayBetween);
  });
});

document.querySelectorAll(".about-title, .about-content p").forEach((el) => {
  let letters = el.textContent.split("");
  el.innerHTML = letters
    .map((l) => {
      if (l === " ") return " "; // spasi tetep jadi spasi
      return `<span>${l}</span>`;
    })
    .join("");
});

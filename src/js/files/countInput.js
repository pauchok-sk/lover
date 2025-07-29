export default function countInput() {
  const buttons = document.querySelectorAll("[data-count-input]");

  if (buttons.length) {
    buttons.forEach(btn => {
      btn.addEventListener("click", () => {
        const count = +btn.dataset.countInput;
        const input = btn.closest(".input-control").querySelector(".input");

        input.value = count;
      })
    })
  }
}
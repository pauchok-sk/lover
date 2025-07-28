export default function copy() {
  const buttons = document.querySelectorAll("[data-copy]");

  if (buttons.length) {
    buttons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const copytext = btn.dataset.copy;
        const textBtn = btn.textContent;
        const nextText = btn.dataset.text;
        
        btn.textContent = nextText || "Copied";
        btn.style.pointerEvents = "none";

        setTimeout(() => {
          btn.textContent = textBtn;
          btn.style.pointerEvents = "all";
        }, 3000);

        navigator.clipboard.writeText(copytext);
      });
    });
  }
}
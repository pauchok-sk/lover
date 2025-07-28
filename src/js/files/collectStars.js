export default function collectStars() {
  const countStars = document.querySelector("#count-stars");
  const btnGet = document.querySelector("#get-stars");

  if (countStars) {

    btnGet.addEventListener("click", () => {
      requestAnimationFrame(frameMain);

      const frameFriend = () => {
        const num = +countStars.textContent.replace(/\s+/g, "");

        if (num <= 0) {
          countStars.textContent = 0;
          return;
        }

        countStars.textContent = num - (Math.round(num / 10) || 1);

        requestAnimationFrame(frameFriend);
      };

      requestAnimationFrame(frameFriend);
    });

    const frameMain = () => {
      const num = +countStars.textContent.replace(/\s+/g, "");

      if (num <= 0) {
        countStars.textContent = 0;
        return;
      }

      countStars.textContent = num - (Math.round(num / 10) || 1);

      requestAnimationFrame(frameMain);
    };
  }
}

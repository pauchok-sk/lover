(() => {
    "use strict";
    function collectStars() {
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
    function copy() {
        const buttons = document.querySelectorAll("[data-copy]");
        if (buttons.length) buttons.forEach(btn => {
            btn.addEventListener("click", () => {
                const copytext = btn.dataset.copy;
                const textBtn = btn.textContent;
                const nextText = btn.dataset.text;
                btn.textContent = nextText || "Copied";
                btn.style.pointerEvents = "none";
                setTimeout(() => {
                    btn.textContent = textBtn;
                    btn.style.pointerEvents = "all";
                }, 3e3);
                navigator.clipboard.writeText(copytext);
            });
        });
    }
    collectStars();
    copy();
})();
import "../scss/style.scss";
import collectStars from "./files/collectStars.js";
import copy from "./files/copy.js";
import countInput from "./files/countInput.js";

collectStars();
copy();
countInput();

document.addEventListener("DOMContentLoaded", function () {
  var myModal = new bootstrap.Modal(
    document.getElementById("placed-bet")
  );
  // myModal.show();
});

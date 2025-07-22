import "../scss/style.scss";
import spoller from "./files/spoller.js";

spoller();

document.addEventListener("DOMContentLoaded", function () {
  var myModal = new bootstrap.Modal(document.getElementById("filters-modal"));
  myModal.show();
});

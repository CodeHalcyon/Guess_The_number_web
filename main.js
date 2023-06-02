const check_box = document.getElementById("flexCheckDefault");
const btn = document.getElementById("start-btn");
const form = document.getElementById("form");
function startGame() {
  if (check_box.checked === false) {
    alert("Please fill the checkbox");
    check_box.focus();
  }
}

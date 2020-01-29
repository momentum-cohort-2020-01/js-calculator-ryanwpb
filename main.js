//Let's add the click event to the buttons
const buttons = document.querySelectorAll(".btn");
let screen = document.querySelector(".screen");
let clear = document.querySelector(".clear");
for (const button of buttons) {
  button.addEventListener("click", function() {
    let value = this.innerHTML;
    screen.innerHTML += value + " ";
  });
}

clear.addEventListener("click", function() {
  screen.innerHTML = " ";
});

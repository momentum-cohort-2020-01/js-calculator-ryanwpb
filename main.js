//Let's add the click event to the buttons
const buttons = document.querySelectorAll(".btn");
let screen = document.querySelector(".screen");
let clear = document.querySelector(".clear");
let equal = document.querySelector("#equal");

for (const button of buttons) {
  button.addEventListener("click", function() {
    let value = this.innerHTML;
    screen.innerHTML += value;
  });
}

//Here we clear the screen innerText
clear.addEventListener("click", function() {
  screen.innerHTML = " ";
});

//Finally we evaluate the answer
equal.addEventListener("click", function() {
  let result = screen.innerText;
  let answer = eval(result);
  screen.innerText = answer;
});

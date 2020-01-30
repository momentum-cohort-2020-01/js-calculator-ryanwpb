//Let's add the click event to the buttons
const buttons = document.querySelectorAll(".btn");
let screen = document.querySelector(".screen");
let clear = document.querySelector(".clear");
let equal = document.querySelector("#equal");

// let evaluation = currentCalc.innerText;
// let answer = eval(evaluation);
// currentCalc.innerHTML=answer;

for (const button of buttons) {
  button.addEventListener("click", function() {
    let value = this.innerHTML;
    screen.innerText += value + " ";
  });
}

clear.addEventListener("click", function() {
  screen.innerText = " ";
});

equal.addEventListener("click", function(val) {
  let result = screen.innerText;
  let answer = eval(result);
  console.log(answer);
  screen.innerText = answer;
});

const ToggleBtn = document.querySelector(".theme-toggle");
const calculator = document.querySelector(".calculator");
const DarkMode = true;

ToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  ToggleBtn.classList.toggle("present");
  DarkMode = !DarkMode;
};

// ---------------------------- conversions ------------------------- //

const display = document.querySelector("#display");
const dispExp = document.querySelector("#disp-expression");
const buttons = document.querySelectorAll("button");
let currExp = "";
let result = null;

buttons.forEach((item) => {
  item.onclick = () => {
    if (item.id == "clear") {
      display.innerText = "";
      dispExp.innerText = "";
      currExp = "";
    } else if (item.id == "backspace") {
      let string = display.innerText.toString();
      display.innerText = string.substr(0, string.length - 1);
      currExp = currExp.substr(0, currExp.length - 1);
      dispExp.innerText = currExp;
    } else if (item.id == "percentage") {
      if (currExp !== "") {
        const percentage = eval(currExp) / 100;
        display.innerText = percentage;
        dispExp.innerText = currExp + "%";
        currExp = percentage + "";
      }
    } else if (item.id == "equal") {
      if (currExp !== "") {
        result = eval(currExp);
        display.innerText = result;
        dispExp.innerText = currExp;
        currExp = result + "";
      }
    } else if (item.id == "root") {
      if (currExp !== "") {
        const squareRoot = Math.sqrt(eval(currExp));
        display.innerText = squareRoot;
        dispExp.innerText = "√(" + currExp + ")";
        currExp = squareRoot + "";
      }
    } else if (item.id == "ans") {
      if (result !== null) {
        display.innerText = result;
        dispExp.innerText = "ans";
        currExp = result + "";
      }
    } else if (item.id == "plusminus") {
      if (result !== null) {
        result = -result;
        display.innerText = result;
        dispExp.innerText = currExp;
        currExp = result + "";
      }
    } else if (display.innerText == "Empty!" && item.id != "equal") {
      display.innerText = "";
      currExp = "";
      display.innerText += item.id;
      currExp += item.id;
      dispExp.innerText = currExp;
    } else {
      display.innerText += item.id;
      currExp += item.id;
      dispExp.innerText = currExp;
    }
  };
});


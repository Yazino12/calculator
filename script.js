"use strict";

let display = "";
let opera = "";
let num1 = 0;
let num2 = 0;
let result = 0;

function absolute() {
  if (num1 && !opera) {
    num1 = num1 * -1;
    document.querySelector("h1").textContent = num1;
  }
}

function moduler() {
  if (num1 && !opera) {
    num1 = num1 % num1;
    document.querySelector("h1").textContent = num1;
    display = "";
  }
}

function reset() {
  document.querySelector("h1").textContent = "0";
  document.querySelector("p").textContent = "";
  display = "";
  opera = "";
  num1 = 0;
  num2 = 0;
  result = 0;
}

function select(event) {
  if (event == 0 && !display) {
  } else {
    if (!opera) {
      if ((document.querySelector("h1").textContent = "0")) {
        document.querySelector("h1").textContent = "";
      }
      display += event;
      num1 = parseFloat(display);
      document.querySelector("h1").textContent = display;
    } else if (result) {
      document.querySelector("h1").textContent = "";
      display += event;
      num1 = result;
      num2 = parseFloat(display);
      document.querySelector("h1").textContent = display;
      document.querySelector("p").textContent = `${num1} ${opera}`;
    } else {
      document.querySelector("h1").textContent = "";
      display += event;
      num2 = parseFloat(display);
      document.querySelector("h1").textContent = display;
      document.querySelector("p").textContent = `${num1} ${opera} ${num2}`;
    }
  }
}

function operation(event) {
  if (num1 && opera && num2) {
    equals();
    opera = event;
  } else {
    opera = event;
    display = "";
    document.querySelector("p").textContent = `${num1} ${opera}`;
  }
}

function equals() {
  display = "";
  if (opera == "+") result = add(num1, num2);
  else if (opera == "-") result = subtract(num1, num2);
  else if (opera == "x") result = multiply(num1, num2);
  else if (opera == "/") result = divide(num1, num2);
  document.querySelector("h1").textContent = result;
  document.querySelector("p").textContent = `${num1} ${opera} ${num2} =`;
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  return a / b;
}

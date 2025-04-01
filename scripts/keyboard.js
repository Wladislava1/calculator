import { calculate } from "./calculator.js";

const res = document.getElementById("result");

export function keyboardInputHandler(e) {
  e.preventDefault();

  const { key } = e;

  switch (key) {
    case "0":
    case "1":
    case "2":
    case "3":
    case "4":
    case "5":
    case "6":
    case "7":
    case "8":
    case "9":
    case "+":
    case "-":
    case "*":
    case "/":
    case ".":
      res.value += key;
      break;

    case "Enter":
      calculate(res.value);
      break;

    case "Backspace":
      res.value = res.value.slice(0, -1);
      break;

    default:
      break;
  }
}

const lightTheme = "styles/light.css";
const darkTheme = "styles/dark.css";
const sunIcon = "assets/SunIcon.svg";
const moonIcon = "assets/MoonIcon.svg";
const themeIcon = document.getElementById("theme-icon");
const res = document.getElementById("result");
const toast = document.getElementById("toast");

function calculate(value) {
  if (!value) return;

  try {
    const calculatedValue = eval(value);
    if (isNaN(calculatedValue) || !isFinite(calculatedValue)) {
      throw new Error("Invalid operation");
    }
    res.value = calculatedValue;
  } catch (error) {
    res.value = "Error";
    setTimeout(() => {
      res.value = "";
    }, 1300);
  }
}

function changeTheme() {
  const theme = document.getElementById("theme");
  const isLightTheme = theme.getAttribute("href") === lightTheme;

  theme.setAttribute("href", isLightTheme ? darkTheme : lightTheme);
  themeIcon.setAttribute("src", isLightTheme ? sunIcon : moonIcon);
  toast.innerHTML = isLightTheme ? "Dark Mode 🌙" : "Light Mode ☀️";

  setTimeout(() => {
    toast.innerHTML = "Calculator";
  }, 1500);
}


function liveScreen(enteredValue) {
  res.value = (res.value || "") + enteredValue;
}

document.addEventListener("keydown", keyboardInputHandler);


function keyboardInputHandler(e) {
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


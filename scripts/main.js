import { calculate, liveScreen } from "./calculator.js";
import { changeTheme } from "./theme.js";
import { keyboardInputHandler } from "./keyboard.js";

document.getElementById("theme-icon").addEventListener("click", changeTheme);
document.addEventListener("keydown", keyboardInputHandler);

window.calculate = calculate;
window.liveScreen = liveScreen;

document.body.innerHTML = `
  <input type="text" id="result" />
  <link id="theme" href="styles/dark.css" />
  <img id="theme-icon" src="assets/SunIcon.svg" />
  <h1 id="toast">Calculator</h1>
`;

const res = document.getElementById("result");
const theme = document.getElementById("theme");
const themeIcon = document.getElementById("theme-icon");
const toast = document.getElementById("toast");

import { calculate, liveScreen } from "../scripts/calculator.js";
import { keyboardInputHandler } from "../scripts/keyboard.js";
import { changeTheme } from "../scripts/theme.js";

describe("Calculator Functions", () => {
  beforeEach(() => {
    res.value = "";
  });

  test("liveScreen should append numbers to the result field", () => {
    liveScreen("1", res);
    expect(res.value).toBe("1");

    liveScreen("2", res);
    expect(res.value).toBe("12");

    liveScreen("+", res);
    expect(res.value).toBe("12+");
  });

  test("calculate should evaluate the expression correctly", () => {
    res.value = "2+2";
    calculate(res.value, res);
    expect(res.value).toBe("4");

    res.value = "10/2";
    calculate(res.value, res);
    expect(res.value).toBe("5");

    res.value = "3*4";
    calculate(res.value, res);
    expect(res.value).toBe("12");
  });

  test("calculate should handle invalid expressions", () => {
    res.value = "invalid";
    calculate(res.value, res);
    expect(res.value).toBe("Error");

    setTimeout(() => {
      expect(res.value).toBe("");
    }, 1300);
  });

  test("calculate should handle division by zero", () => {
    res.value = "1/0";
    calculate(res.value, res);
    expect(res.value).toBe("Error");
  });
});

describe("Keyboard Input Handler", () => {
      test("keyboardInputHandler should ignore invalid keys", () => {
        res.value = "123";
        keyboardInputHandler({ key: "A", preventDefault: () => {} });
        expect(res.value).toBe("123");
      });
    });



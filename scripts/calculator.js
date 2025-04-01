export function calculate(value, res) {
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

export function liveScreen(enteredValue, res) {
  res.value = (res.value || "") + enteredValue;
}

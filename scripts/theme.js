const lightTheme = "styles/light.css";
const darkTheme = "styles/dark.css";
const sunIcon = "assets/SunIcon.svg";
const moonIcon = "assets/MoonIcon.svg";
const themeIcon = document.getElementById("theme-icon");
const toast = document.getElementById("toast");

export function changeTheme() {
  const theme = document.getElementById("theme");
  const isLightTheme = theme.getAttribute("href") === lightTheme;

  theme.setAttribute("href", isLightTheme ? darkTheme : lightTheme);
  themeIcon.setAttribute("src", isLightTheme ? sunIcon : moonIcon);
  toast.innerHTML = isLightTheme ? "Dark Mode 🌙" : "Light Mode ☀️";

  setTimeout(() => {
    toast.innerHTML = "Calculator";
  }, 1500);
}

const colorBtn = document.getElementById("colorBtn");
const hexColor = document.querySelector(".hexColor");
const rgbColor = document.querySelector(".rgbColor");

colorBtn.addEventListener("click", () => {
  // Deriving the Hexcode
  function getRandomValues() {
    const hexValues = "01234567890ABCDEF";
    let hexCodes = "#";

    for (let i = 0; i < 6; i++) {
      hexCodes += hexValues[Math.floor(Math.random() * 16)];
      hexColor.textContent = hexCodes;
      document.body.style.backgroundColor = hexCodes;
    }
    return color;
  }
  getRandomValues();

  function getHexValues(color) {
    let hexCode1 = hexValues(Math.trunc(color / 16));
    let hexCode2 = hexValues(color % 16);
    return String(hexCode1) + String(hexCode2);
  }

  hexColor.innerHTML = `#${getHexValues(red)}${getHexValues(
    green
  )}${getHexValues(blue)}`;

  // Deriving the RGB code
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let rgbValues = `${red}, ${green}, ${blue}`;

  document.body.style.backgroundColor = rgbValues;
  rgbColor.innerHTML = ` rgb(${rgbValues})`;
});

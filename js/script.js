const colorBtn = document.getElementById("colorBtn");
const hexColor = document.querySelector(".hexColor");
const rgbColor = document.querySelector(".rgbColor");

const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

colorBtn.addEventListener("click", () => {
  let hexCodes = "#";
  for (let i = 0; i < 6; i++) {
    hexCodes += hexValues[getHexValues()];
  }
  hexColor.innerHTML = hexCodes;
  document.body.style.backgroundColor = hexCodes;

  rgbColor.innerHTML = `rgb(${getRGBvalues()}, ${getRGBvalues()}, ${getRGBvalues()})`;
});

function getHexValues() {
  return Math.floor(Math.random() * hexValues.length);
}

function getRGBvalues() {
  return Math.floor(Math.random() * 255);
}

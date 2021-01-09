const colorBtn = document.getElementById("colorBtn");
const hexColor = document.querySelector(".hexColor");
const rgbColor = document.querySelector(".rgbColor");

function hexValues(x) {
  let y;
  switch (x) {
    case 10:
      y = "A";
      break;
    case 11:
      y = "B";
      break;
    case 12:
      y = "C";
      break;
    case 13:
      y = "D";
      break;
    case 14:
      y = "E";
      break;
    case 15:
      y = "F";
      break;
    default:
      y = x;
  }
  return y;
}

colorBtn.addEventListener("click", () => {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let rgbValues = `${red}, ${green}, ${blue}`;

  document.body.style.backgroundColor = rgbValues;
  rgbColor.innerHTML = ` rgb(${rgbValues})`;

  function getHexValues(color) {
    let hexCode1 = hexValues(Math.trunc(color / 16));
    let hexCode2 = hexValues(color % 16);
    return String(hexCode1) + String(hexCode2);
  }

  hexColor.innerHTML = `#${getHexValues(red)}${getHexValues(
    green
  )}${getHexValues(blue)}`;
});


const colorBtn = document.getElementById("colorBtn");
const hexColor = document.querySelector(".hexColor");
const rgbColor = document.querySelector(".rgbColor");


const getHexCode = () => {

    const hexValues = "01234567890ABCDEF";
    let hexCode = "#";

    for (let i = 0; i < 6; i++) {
      hexCode += hexValues[Math.floor(Math.random() * 16)];
    }

    return hexCode;

}


const hexToRgb = (hex) => {

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;

}


colorBtn.addEventListener("click", () => {

  const hexCode = getHexCode()

  const red = hexToRgb(hexCode).r
  const green = hexToRgb(hexCode).g
  const blue = hexToRgb(hexCode).b

  hexColor.textContent = hexCode
  document.body.style.backgroundColor = hexCode
  rgbColor.innerHTML = ` RGB(${red}, ${green}, ${blue})`;

});
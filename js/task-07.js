const fontSizeControl = document.getElementById("font-size-control");
const textSpan = document.getElementById("text");
textSpan.style.fontSize = fontSizeControl.value + "px";
fontSizeControl.addEventListener("input", function () {
  const fontSizeValue = fontSizeControl.value;
  textSpan.style.fontSize = fontSizeValue + "px";
});

const copytext = document.querySelector("#copy");
const onclickbutton = document.querySelector("#onClick1");
const onmouseoverbutton = document.querySelector("#mouseOver1");
const body = document.querySelector("body");
const pResult = document.querySelector("#result");
const colorInput = document.querySelector("#colorInput");
const copyClipboardButton = document.querySelector("#copyClipboard");

// console.log(onclickbutton)
// console.log(onmouseoverbutton)

//!func

function randomColor() {
  let letters = "0123456789ABCDEF".split("");
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }

  return color;
}

//! func


//! events
onclickbutton.addEventListener("click", () => {
  let color = randomColor();
  body.style.backgroundColor = color;
  pResult.textContent = `Renk Kodunuz : ${color}`;
//   console.log(color)
});

onmouseoverbutton.addEventListener("mouseover", () => {
  let color = randomColor();
  body.style.backgroundColor = color;
  pResult.textContent = `Renk Kodunuz : ${color}`
//   console.log(color)
});

colorInput.addEventListener("input", () => {
  const color = colorInput.value;
  body.style.backgroundColor = color;
  pResult.textContent = `Renk Kodunuz : ${color}`;
});
//! events




//! copy
copyClipboardButton.addEventListener("click", () => {
  const color = pResult.textContent.replace('Renk Kodunuz : ', '');
  navigator.clipboard.writeText(color).then(() => {
    alert(` ${color} Kopyalandı.`);
  });
});
//!
const h1 = document.querySelector(".hello h1");

function handleh1Click() {
  const currentColor = h1.style.color;
  let newColor;
  if (currentColor === "blue") {
    newColor = "tomato";
  } else {
    newColor = "blue";
  }
  console.log(newColor);
  h1.style.color = newColor;
}

h1.addEventListener("click", handleh1Click);


function myFunction(clicked) {
  const elemento = document.querySelector(".selected");
  // console.log(elemento);
  if (elemento != null) {
    elemento.classList.remove("selected");
  }

  clicked.classList.add("selected");
}

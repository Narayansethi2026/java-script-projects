let heading = document.getElementById("heading");
let textinput = document.getElementById("textinput");
let changebtn = document.getElementById("changebtn");

changebtn.addEventListener("click", function () {

   heading.textContent = textinput.value
});
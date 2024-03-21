let activarNav = document.getElementById("activarNav");
let mostrarNav = document.getElementById("mostrarNav");
let desactivarNav = document.getElementById("desactivarNav");

activarNav.addEventListener("click", function () {
  mostrarNav.classList.toggle("navTOOGLE");
});

desactivarNav.addEventListener("click", function () {
  mostrarNav.classList.toggle("navTOOGLE");
});

let buttonProfile = document.querySelector(".profile__button-small");
console.log(buttonProfile);

let popup = document.querySelector(".popup");
console.log(popup);

let buttonClose = document.querySelector(".popup__close");
console.log(buttonClose);

function handlerOpenPopup() {
  popup.classList.add("popup-opened");
}
/*handlerOpenPopup();*/

buttonProfile.addEventListener("click", handlerOpenPopup);

console.log("Open");

function handlerClosePopup() {
  console.log("Close");
}
/*handlerClosePopup();*/

buttonClose.addEventListener("click", handlerClosePopup);
/*popup.classList.add("popup");*/

console.log("cerrar");

let submit = document.querySelector(".button__form");
console.log(submit);

function handlerSubmit(event) {
  eventPreventDefault;
}
let data1 = document.getElementById("Nombre");
console.log(data1);
let data2 = document.getElementById("Mí");
console.log(data2);
data1.addEventListener(submit, handlerSubmit(events));
/*data2.addEventListener(submit, function());*/
events.PreventDefault;

import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(PopupSelector, handleFormSubmit) {
    super(PopupSelector);
    this._handleFormSubmit = handleFormSubmit;
    this._form = this.popupElement.querySelector(".form");

    this._inputList = Array.from(this._form.querySelectorAll(".form__input"));
  }

  _getInputValues() {
    const inputValues = {};
    this._inputList.forEach((input) => {
      inputValues[input.id] = input.value;
    });
    return inputValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._handleFormSubmit(this._getInputValues());
    });
  }

  close() {
    super.close();
    this._form.reset();
  }
}

export default class FormValidation {
  constructor(formElement, settings) {
    (this.formElement = formElement), (this.settings = settings);
  }

  showInputError(inputElement, errorMessage) {
    const errorElement = this.formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.add(this.settings.inputErrorClass);
    errorElement.textContent = errorMessage;
  }

  hideInputError(inputElement) {
    const errorElement = this.formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.remove(this.settings.inputErrorClass);
    errorElement.textContent = "";
  }

  checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this.showInputError(inputElement, inputElement.validationMessage);
    } else {
      this.hideInputError(inputElement);
    }
  }

  hasInvalidInput(inputList) {
    return inputList.some((inputElement) => !inputElement.validity.valid);
  }

  toggleButtonState(inputList) {
    if (hasInvalidInput(inputList)) {
      buttonElement.classList.add(this.settings.inactiveButtonClass);
      buttonElement.disabled = true;
    } else {
      buttonElement.classList.remove(this.settings.inactiveButtonClass);
      buttonElement.disabled = false;
    }
  }

  setEventListeners() {
    this.inputList = Array.from(
      this.formElement.querySelectorAll(this.settings.formSelector)
    );
    this.inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this.checkInputValidity();
        this.toggleButtonState();
      });
    });
  }

  enableValidation() {
    this.formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this.setEventListeners();
  }
}

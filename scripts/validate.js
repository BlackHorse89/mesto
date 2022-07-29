const validationConfig = {
  form: '.popup__form',
  input: '.popup__text',
  button: '.popup__save',
  errorInput: 'popup__text_error',
  disabledBatton: 'popup__save_disabled'
}

function enableValidation(selector) {
  const forms = Array.from(document.querySelectorAll(selector.form));
  forms.forEach((form) => {
      form.addEventListener('input', (evt) => checkInputValidity(evt, selector));
  })
}

function checkInputValidity(evt, selector) {
  const input = evt.target;
  const form = evt.currentTarget;

  showError(input, form);
  stateButton(form, selector);
  checkInput(form, selector)
}

function showError(input, form) {
  const span = form.querySelector(`.${input.id}-error`);
  span.textContent = input.validationMessage;
}

function checkInput(form, selector) {
  const inputs = Array.from(form.querySelectorAll(selector.input));
  inputs.forEach((input) => {
      const inputIsValid = input.checkValidity()
      if (inputIsValid) {
          input.classList.remove(selector.errorInput);
      } else {
          input.classList.add(selector.errorInput);
      }
  })
}

function stateButton(form, selector) {
  const button = form.querySelector(selector.button)
  const isValid = form.checkValidity();
  if (isValid) {
      button.removeAttribute('disabled');
      button.classList.remove(selector.disabledBatton);
  }
  if (!isValid) {
      button.setAttribute('disabled', true);
      button.classList.add(selector.disabledBatton);
  }
}
enableValidation(validationConfig);
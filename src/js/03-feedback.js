import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
getFromLS();

function getFromLS() {
  let saveLocal = localStorage.getItem('feedback-form-state');
  if (saveLocal) {
    saveLocal = JSON.parse(saveLocal);
    Object.entries(saveLocal).forEach(([name, value]) => (form.elements[name].value = value));
  }
}

function toSubmitForm(event) {
  event.preventDefault();
  const formData = new FormData(form);
  formData.forEach((key, value) => console.log(`${value} : ${key}`));
  form.reset();
  localStorage.removeItem('feedback-form-state');
}

function toChangeInput(event) {
  let saveLocal = localStorage.getItem('feedback-form-state');
  saveLocal = saveLocal ? JSON.parse(saveLocal) : {};
  saveLocal[event.target.name] = event.target.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(saveLocal));
}

form.addEventListener('input', throttle(toChangeInput, 500));
form.addEventListener('submit', toSubmitForm);
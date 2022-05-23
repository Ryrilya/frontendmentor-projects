// Prendiamo gli elementi di input del form
// prettier-ignore
const inputElements = document.querySelectorAll<HTMLInputElement>('.form-container__input');
const formEl = document.querySelector<HTMLFormElement>('.form-container__form');

formEl.addEventListener('submit', () => {
	// TODO: controllare ogni valore degli input
	console.log('aaaa');
});

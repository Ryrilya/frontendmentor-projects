type Rating = 1 | 2 | 3 | 4 | 5;

let selectedRating: Rating;

// prettier-ignore
const componentContainer = document.querySelector<HTMLDivElement>('.component__container');
const ratingsButtons = document.querySelectorAll('.component__rating-number');
const form = document.querySelector<HTMLFormElement>('.component__form');

// prettier-ignore
const thankYouWrapper = document.querySelector<HTMLDivElement>('.thank-you__wrapper');
// prettier-ignore
const thankYouSelection = document.querySelector<HTMLDivElement>('.thank-you__selection');
// prettier-ignore
const thankYouGoBack = document.querySelector<HTMLParagraphElement>('.thank-you__go-back-text');

ratingsButtons.forEach((btn, i) =>
	btn.addEventListener('click', () => {
		selectedRating = (i + 1) as Rating;
	})
);

form.addEventListener('submit', (e: Event) => {
	e.preventDefault();

	if (!selectedRating) return;

	componentContainer.style.display = 'none'; // hide the rating component
	thankYouWrapper.style.display = 'flex'; // show instead the thank you component

	const thankYouSelectionText = document.createElement('p');
	thankYouSelectionText.textContent = `You selected ${selectedRating} out of 5`;

	// First, remove previous selections texts
	thankYouSelection.childNodes.forEach((node) => node.remove());
	// Add the new one
	thankYouSelection.appendChild(thankYouSelectionText);
});

thankYouGoBack.addEventListener('click', (_: Event) => {
	thankYouWrapper.style.display = 'none';
	componentContainer.style.display = 'block';
});

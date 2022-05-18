var selectedRating;
// prettier-ignore
var componentContainer = document.querySelector('.component__container');
var ratingsButtons = document.querySelectorAll('.component__rating-number');
var form = document.querySelector('.component__form');
// prettier-ignore
var thankYouWrapper = document.querySelector('.thank-you__wrapper');
// prettier-ignore
var thankYouSelection = document.querySelector('.thank-you__selection');
// prettier-ignore
var thankYouGoBack = document.querySelector('.thank-you__go-back-text');
ratingsButtons.forEach(function (btn, i) {
    return btn.addEventListener('click', function () {
        selectedRating = (i + 1);
    });
});
form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!selectedRating)
        return;
    componentContainer.style.display = 'none'; // hide the rating component
    thankYouWrapper.style.display = 'flex'; // show instead the thank you component
    var thankYouSelectionText = document.createElement('p');
    thankYouSelectionText.textContent = "You selected ".concat(selectedRating, " out of 5");
    // First, remove previous selections texts
    thankYouSelection.childNodes.forEach(function (node) { return node.remove(); });
    // Add the new one
    thankYouSelection.appendChild(thankYouSelectionText);
});
thankYouGoBack.addEventListener('click', function (_) {
    thankYouWrapper.style.display = 'none';
    componentContainer.style.display = 'block';
});

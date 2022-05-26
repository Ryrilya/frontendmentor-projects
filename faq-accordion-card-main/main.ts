interface Faq {
	question: string;
	answer: string;
}

const FAQS: Faq[] = [
	{
		question: 'How many team members can I invite?',
		answer:
			'You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.',
	},
	{
		question: 'What is the maximum file upload size?',
		answer:
			'No more than 2GB. All files in your account must fit your allotted storage space.',
	},
	{
		question: 'How do I reset my password?',
		answer:
			'Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.',
	},
	{
		question: 'Can I cancel my subscription?',
		answer:
			'Yes! Send us a message and we’ll process your request no questions asked.',
	},
	{
		question: 'Do you provide additional support?',
		answer:
			'Chat and email support is available 24/7. Phone lines are open during normal business hours.',
	},
];

const faqs = document.querySelector<HTMLDivElement>('.faq__faqs');

function generateFaq(faq: Faq): HTMLDivElement {
	// This function generates the following structure
	/*
		<div class="faq__faq-item">
			<div class="faq__faq-item-question-container">
				<span class="faq__faq-item-question">{{question}}</span>
				<img src="images/icon-arrow-down.svg" alt="arrow-down icon" title="click to expand">
			</div>
			<div class="faq__faq-item-answer">
				{{ answer }}
			</div>
		</div>
	*/

	const classPrefix = 'faq__faq-item';

  const faqItem = document.createElement('div');
	faqItem.classList.add(classPrefix)

	const faqItemQuestionContainer = document.createElement('div');
	faqItemQuestionContainer.classList.add(`${classPrefix}-question-container`);

	const faqItemQuestion = document.createElement('span');
	faqItemQuestion.classList.add(`${classPrefix}-question`);
	faqItemQuestion.textContent = faq.question;

	const faqItemArrowDown = document.createElement('img');
	faqItemArrowDown.src = "images/icon-arrow-down.svg";

	const faqItemAnswer = document.createElement('div');
	faqItemAnswer.classList.add(`${classPrefix}-answer`);
	faqItemAnswer.textContent = faq.answer;

	// Append all
	faqItemQuestionContainer.appendChild(faqItemQuestion);
	faqItemQuestionContainer.appendChild(faqItemArrowDown);
	faqItem.appendChild(faqItemQuestionContainer);
	faqItem.appendChild(faqItemAnswer);

	return faqItem;
}

function generateFaqs() {
	FAQS.forEach((faq) => faqs.appendChild(generateFaq(faq)));
}

generateFaqs();

const questionsContainers = document.querySelectorAll<HTMLDivElement>('.faq__faq-item-question-container');
const answers = document.querySelectorAll<HTMLDivElement>('.faq__faq-item-answer');

questionsContainers.forEach((el, i) => {
	el.addEventListener('click', () => {
		if (answers[i].style.display === "none") {
			(el.children[0] as HTMLDivElement).classList.add('active')
			answers[i].style.display = "block";
		} else {
			(el.children[0] as HTMLDivElement).classList.remove('active')
			answers[i].style.display = "none";
		}
	})
})
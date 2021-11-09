/*
Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

// DOM nodes
const numCont = document.querySelector('.container');
const userInputsCont = document.querySelector('.user-inputs');
const userInputs = document.querySelectorAll('input');
const checkBtn = document.querySelector('button');
const resultCont = document.querySelector('.result');

// global variables
const randomNumbers = [];
const userNumbers = [];
const rightNumbers = [];

setTimeout(function() {
	numCont.classList.add('hidden');
	userInputsCont.classList.remove('hidden');
}, 10000);

// generates 5 different random numbers to be displayed on the page
while (randomNumbers.length < 5) {
	const randomNumber = Math.floor(Math.random() * 100) + 1;

	if (!randomNumbers.includes(randomNumber)) {
		randomNumbers.push(randomNumber);
	}
}

console.log(randomNumbers);

// displays randomNumbers on page
randomNumbers.forEach((number) => {
	numCont.innerHTML += `<div class="number-container">${number}</div>`;
});

checkBtn.addEventListener('click', function() {
	userInputs.forEach(function(n) {
		userNumbers.push(Number(n.value));
		if (randomNumbers.includes(Number(n.value))) {
			rightNumbers.push(Number(n.value));
		}
	});
	console.log(rightNumbers);
	userInputsCont.classList.add('hidden');
	resultCont.classList.remove('hidden');
	rightNumbers.forEach((number) => {
		resultCont.innerHTML += `<div class="number-container">${number}</div>`;
	});
});
/*
Visualizzare in pagina 5 numeri casuali.
Da lì parte un timer di 30 secondi.
Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
*/

// global variables
const randomNumbers = [];
const userNumbers = [];
const rightNumbers = [];

setTimeout(function() {
	for (let i = 0; i < 5; i++) {
		const userInput = parseInt(prompt('Inserisci il numero che ricordi di aver visualizzato'));
		userNumbers.push(userInput);
		if (randomNumbers.includes(userInput)) {
			rightNumbers.push(userInput);
		}
	}
	console.log(userNumbers);
	console.log(rightNumbers);
}, 30000)

// generates 5 different random numbers to be displayed on the page
while (randomNumbers.length < 5) {
	const randomNumber = Math.floor(Math.random() * 100) + 1;

	if (!randomNumbers.includes(randomNumber)) {
		randomNumbers.push(randomNumber);
	}
}

console.log(randomNumbers);
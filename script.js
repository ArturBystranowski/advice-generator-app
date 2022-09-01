const API = "https://api.adviceslip.com/advice";
const adviceText = document.querySelector(".advice");
const adviceId = document.querySelector(".id");
const diceBtn = document.querySelector("button");

const getQuote = () =>
	fetch(API)
		.then((res) => res.json())
		.then((res) => {
			adviceId.innerHTML = res.slip.id;
			adviceText.innerHTML = res.slip.advice;
		});

getQuote();
diceBtn.addEventListener("click", getQuote);

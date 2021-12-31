const secondHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

function setDate() {
	const now = new Date();

	const seconds = now.getSeconds();
	const secondsDegrees = seconds / 60 * 360 + 90;
	secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

	const minutes = now.getMinutes();
	const minuteDegrees = minutes / 60 * 360 + 90;
	minHand.style.transform = `rotate(${minuteDegrees}deg)`;

	const hours = now.getHours();
	const hourDegrees = hours / 12 * 360 + 90;
	hourHand.style.transform = `rotate(${hourDegrees}deg)`;

	if (seconds == 0) {
		secondHand.style.transitionDuration = '0s';
		minHand.style.transitionDuration = '0s';
		hourHand.style.transitionDuration = '0s';
	} else {
		secondHand.style.transitionDuration = '0.05s';
		minHand.style.transitionDuration = '0.05s';
		hourHand.style.transitionDuration = '0.05s';
	}
}

setInterval(setDate, 1000);

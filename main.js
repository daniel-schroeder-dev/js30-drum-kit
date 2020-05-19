document.body.addEventListener('keydown', toggleDrumSound);
document.body.addEventListener('keyup', toggleDrumSound);

function toggleDrumSound(event) {
	const keyElement = document.querySelector(`.key[data-key="${event.keyCode}"]`);
	if (!keyElement) return;
	keyElement.classList.toggle('playing');
	if (keyElement.classList.contains('playing')) {
		const drumSound = document.querySelector(`audio[data-key="${event.keyCode}"]`);
		drumSound.currentTime = 0;
		drumSound.play();
	}
}


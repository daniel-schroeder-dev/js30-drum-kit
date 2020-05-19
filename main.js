document.body.addEventListener('keydown', getKeyElement);
document.body.addEventListener('keyup', getKeyElement);

function getKeyElement(event) {
	const keyElement = document.querySelector(`[data-key="${event.keyCode}"]`);
	if (!keyElement) return;
	keyElement.classList.toggle('playing');
}

const colorBox = document.getElementById('contentWindow');

function changeColor(){
	event.preventDefault();
	const red = Math.random() * 100;
	const green = Math.random() * 100;
	const blue = Math.random() * 100;

	colorBox.style.backgroundColor = rgb(red,blue,green);
}

document.addEventListener('touchstart', changeColor);



const colorBox = document.getElementById('contentWindow');

function changeColor(){
	event.preventDefault();
	const red = Math.random() * 250;
	const green = Math.random() * 250;
	const blue = Math.random() * 250;

	colorBox.style.backgroundColor = "rgb("+red+"," +blue+ "," +green+")";
}

document.addEventListener('touchstart', changeColor);



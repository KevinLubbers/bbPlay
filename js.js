const colorBox = document.getElementById('mainStage');

function changeColor(){
	const red = Math.random() * 250;
	const green = Math.random() * 250;
	const blue = Math.random() * 250;

	colorBox.style.backgroundColor = "rgb("+red+"," +blue+ "," +green+")";
}

document.addEventListener('touchstart', changeColor);



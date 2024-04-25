const colorBox = document.getElementById('mainStage');

function changeColor(){
	const red = Math.random() * 250;
	const green = Math.random() * 250;
	const blue = Math.random() * 250;

	colorBox.style.backgroundColor = "rgb("+red+"," +blue+ "," +green+")";
}
function lockScreen(){
	document.documentElement.requestFullscreen();

}
function unlockScreen(){
	document.exitFullscreen();
}
document.addEventListener('touchstart', changeColor);
document.addEventListener('touchcancel', changeColor);
document.addEventListener('touchend', changeColor);
document.addEventListener('touchmove', changeColor);
document.addEventListener('scroll', changeColor);
document.addEventListener('click', changeColor);
document.addEventListener('pointerdown', changeColor);
document.addEventListener('pointerup', changeColor);



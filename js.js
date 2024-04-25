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
document.addEventListener('touchend', function(event){
	event.preventDefault();
});
document.addEventListener('touchmove', changeColor);
document.addEventListener('scroll', function(event){
	event.preventDefault();
});
document.addEventListener('click', changeColor);
document.addEventListener('pointerdown', function(event){
	event.preventDefault();
});
document.addEventListener('pointerup', function(event){
	event.preventDefault();
});



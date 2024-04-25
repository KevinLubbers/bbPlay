const colorBox = document.getElementById('mainStage');

function changeColor(){
	document.documentElement.requestFullscreen();
	const red = Math.random() * 250;
	const green = Math.random() * 250;
	const blue = Math.random() * 250;

	colorBox.style.backgroundColor = "rgb("+red+"," +blue+ "," +green+")";
}

function unlockScreen(){
	document.exitFullscreen();
}
document.addEventListener('touchstart', changeColor);
document.addEventListener('touchcancel', changeColor);
document.addEventListener('touchend', function(event){
});
document.addEventListener('touchmove', changeColor);
document.addEventListener('scroll', function(event){
	
});
document.addEventListener('click', changeColor);
document.addEventListener('pointerdown', function(event){
});
document.addEventListener('pointerup', function(event){
	event.preventDefault();
});



const colorBox = document.getElementById('mainStage');
let canChangeColor = true;

function changeColor(){
	if (canChangeColor){
		
		const red = Math.random() * 250;
		const green = Math.random() * 250;
		const blue = Math.random() * 250;

		colorBox.style.backgroundColor = "rgb("+red+","+blue+","+green+")";
		
		canChangeColor = false;
		setTimeout(function(){
			canChangeColor = true;
		}, 2000);
	}
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



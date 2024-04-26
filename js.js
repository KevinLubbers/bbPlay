const colorBox = document.getElementById('mainStage');
const eventBox = document.getElementById('eventBox');
let canChangeColor = true;

function changeColor(eventType){
	if (canChangeColor){
		
		const red = Math.random() * 250;
		const green = Math.random() * 250;
		const blue = Math.random() * 250;

		colorBox.style.backgroundColor = "rgb("+red+","+blue+","+green+")";
		eventBox.innerHTML = "Event: " + eventType
		
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
document.addEventListener('touchstart', () => changeColor('touchstart'));
document.addEventListener('touchcancel', () => changeColor('touchcancel'));
document.addEventListener('touchend', () => changeColor('touchend'));
document.addEventListener('touchmove', () => changeColor('touchmove'));
document.addEventListener('scroll', () => changeColor('scroll'));

document.addEventListener('click', () => changeColor('click'));
document.addEventListener('pointerdown', () => changeColor('pointerdown'));
document.addEventListener('pointerup', () => {
    changeColor('pointerup');
});



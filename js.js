const colorBox = document.getElementById('mainStage');
const eventBox = document.getElementById('eventBox');
let canChangeColor = true;

function changeColor(eventType){
	if (canChangeColor || eventType === 'touchend') {
		
		const red = Math.random() * 250;
		const green = Math.random() * 250;
		const blue = Math.random() * 250;

		colorBox.style.backgroundColor = "rgb("+red+","+blue+","+green+")";
		eventBox.innerHTML = "Event: " + eventType
		
		canChangeColor = false;
		setTimeout(function(){
			canChangeColor = true;
		}, 3000);
	}
}
function moveColor(){

}
function createColorDot(e) {
	var x = e.pageX || e.touches[0].pageX;
	var y = e.pageY || e.touches[0].pageY;
	const red = Math.random() * 250;
	const green = Math.random() * 250;
	const blue = Math.random() * 250;

	const dot = document.createElement('div');
	dot.className = 'color-dot';
	dot.style.backgroundColor = "rgb("+red+","+blue+","+green+")"; 
	dot.style.left = x + 'px';
	dot.style.top = y + 'px';
	colorBox.appendChild(dot);
	fadeOut(dot);

	eventBox.innerHTML = "Event: " + e.type; 
}

function fadeOut(element) {
	setTimeout(function() {
		element.style.opacity = 0;
		setTimeout(function() { colorBox.removeChild(element); }, 1500);
	}, 500);
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
document.addEventListener('touchmove', function(e) { createColorDot(e); });
document.addEventListener('scroll', () => function(e) { createColorDot(e); });

document.addEventListener('click', () => changeColor('click'));
document.addEventListener('pointerdown', () => function(e) { createColorDot(e); });
document.addEventListener('pointerup', () => function(e) { createColorDot(e); });



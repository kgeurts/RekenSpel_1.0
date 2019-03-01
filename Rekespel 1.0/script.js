const wrapper = document.getElementById("wrapper");
const cijfer1 = document.getElementById("cijfer1");
const multiply = document.getElementById("multiply");
const cijfer2 = document.getElementById("cijfer2");
const myAnswer = document.getElementById("myAnswer");
const feedback = document.getElementById("feedback");
const goed = document.getElementById("goed");
const fout = document.getElementById("fout");
const opgaven = document.getElementById("opgaven");

let mySum;
let sound = new Audio();

function makeSum(){
	
}

function makeSum1(){
	var a = Math.floor(Math.random() * 9 + 1);
	var b = Math.floor(Math.random() * 9 + 1);
	mySum = a + " * " + b;
	cijfer1.innerHTML = a;
	multiply.innerHTML = "x"
	cijfer2.innerHTML = b;
	myAnswer.focus();

}

function keyPressed(evt) {
	if (evt.keyCode == 13) {
		if (eval(mySum) == myAnswer.value){
			feedback.src= "img/goed.png";
			goed.innerHTML++;
			opgaven.innerHTML++;
			sound.src= "img/right.wav";
			sound.play();	

		}
		else{
			feedback.src= "img/fout.png";
			fout.innerHTML++;
			opgaven.innerHTML++;
			sound.src= "img/wrong.wav";
			sound.play();
		}
		window.setTimeout(waiting, 2000);
	}

}

function waiting() {
	feedback.src = "img/feedback.png";
	myAnswer.value = "";
	makeSum1();

}

makeSum1();
myAnswer.addEventListener("keydown", keyPressed, false);
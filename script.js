var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var colran3000 = document.querySelector("#colran3000");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

function randomGradient() {

	let random1 = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
	let random2 = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
	body.style.background = 
	"linear-gradient(to right, " 
	+ random1
	+ ", " 
	+ random2
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
colran3000.addEventListener("click", randomGradient);

setGradient();
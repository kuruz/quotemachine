var button = document.getElementById("btnn");
var body = document.getElementsByTagName("body");

var quotes = [
	"\"Be yourself; everyone else is already taken.\"", 
	"\"Don't cry because it's over, smile because it happened.",
	"\"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.\"",
	"\"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.\"",
	"\"You know you're in love when you can't fall asleep because reality is finally better than your dreams\""
];

var people = [
	"-Oscar Wilde",
	"-Dr. Seuss",
	"-Albert Einstein",
	"-Bernard M. Baruch",
	"- Dr. Seuss"
];

var colors = ["color1",  "color2", "color3",  "color4"];

var len = quotes.length;

button.addEventListener("click", changeQuote);
button.addEventListener("click", changeColor);

function changeQuote(){
	//console.log("ahhsjhshjsajh");
	var r = Math.floor(Math.random() * len) ;
	console.log(r);
	this.parentElement.parentElement.children[0].innerHTML = quotes[r];
}

function changeColor(){
	var r = Math.floor(Math.random() * colors.length) ;
	console.log(r);
	//this.className = colors[r];
	console.log(this.parentElement.parentElement.parentElement.className);
	this.parentElement.parentElement.parentElement.className =  colors[r];
}


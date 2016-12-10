var button = document.getElementById("btnn");
var p = document.getElementsByTagName("p");

var quotes_ = {
	"Be yourself; everyone else is already taken.": "-Oscar Wilde",
	"Don't cry because it's over, smile because it happened.": "-Dr. Seuss",
	"Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.": "-Albert Einstein",
	"Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.": "-Bernard M. Baruch",
	"You know you're in love when you can't fall asleep because reality is finally better than your dreams": "- Dr. Seuss"
};

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

var len = quotes.length;

button.addEventListener("click", changeQuote);

function changeQuote(){
	//console.log("ahhsjhshjsajh");
	var r = Math.floor(Math.random() * len) ;
	console.log(r);
	this.parentElement.parentElement.children[0].innerHTML = quotes[r];
}


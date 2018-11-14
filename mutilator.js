//changes text color
function textColor() {
	document.getElementById("text").style.color = "#ff9d00";
}

//changes font
function changeFont() {
	document.getElementById("text").style.font = "italic bold 16px sans-serif";
}

//adds text to the end of the last paragraph when B key is pressed
document.addEventListener("keydown", function newBork(event) {
	if(event.code == "KeyB") {
		var oldtext = document.getElementById("addBork");

		oldtext.textContent += "BORK! ";
	}
});

//finds and replaces bork text with BORKBORKBORK
function replaceBork() {
	document.body.innerHTML = document.body.innerHTML.replace("bork", "BORKBORKBORK");
}

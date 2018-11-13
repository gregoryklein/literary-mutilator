//changes text color
function textColor() {
	document.getElementById("text").style.color = "#ff9d00";
	console.log("hi");
}

//changes font
function changeFont() {
	document.getElementById("text").style.font = "italic bold 16px sans-serif";
}

//will try to change this to a keyboard event. currently adds BORK to end of p tag
function newBork() {
		var oldtext = document.getElementById("addBork");

		oldtext.textContent += "BORK! ";
	}

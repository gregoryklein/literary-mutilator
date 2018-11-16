//changes text color
function textColor() {
	document.getElementById("text").style.color = "#ff9d00";
}

//changes font
function changeFont() {
	document.getElementById("text").style.font = "italic bold 16px sans-serif";
}

//finds and replaces bork text with BORKBORKBORK
function replaceBork() {
	document.body.innerHTML = document.body.innerHTML.replace("bork", "BORKBORKBORK");
}

//highlights the word "doggo" in last paragraph
function highlightDoggo() {
	document.body.innerHTML = document.body.innerHTML.replace(/doggo/g, "<span class='highlight'>doggo</span>");
}

//adds text to the end of the last paragraph when B key is pressed
document.addEventListener("keydown", function newBork(event) {
	if(event.code == "KeyB") {
		var oldtext = document.getElementById("addBork");

		oldtext.textContent += "BORK! ";
	}
});

function rot(s) {
	return s.replace(/[a-zA-Z]/g, function (c) {
		return String.fromCharCode((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
	});
}
function update() {
	document.getElementById('output').value = rot(document.getElementById('input').value);
}
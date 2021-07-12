document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>')

function languageСhange(){
	const ENt = document.querySelectorAll('.language_German')
	const ENText = ENt.textContent
	const mani = document.querySelectorAll('.language_mani')
	 mani.textContent = ENText
}



function languageСhangeE() {
	const ENt = document.querySelectorAll('.language_English')
	const ENText = ENt.textContent
	const mani = document.querySelectorAll('.language_mani')
	 mani.textContent = ENText
}

function swapValues(){
var tmp = document.getElementById("c").value;
document.getElementById("c").value = document.getElementById("d").value;
document.getElementById("d").value = tmp;

}
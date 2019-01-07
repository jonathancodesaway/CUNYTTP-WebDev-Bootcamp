function checkpass() {
	if (!(document.getElementById('password').value == "12345678")){
		alert("BAD PASS");
	} else {
		document.getElementById('head').innerHTML = "CORRECT!";
	}
}
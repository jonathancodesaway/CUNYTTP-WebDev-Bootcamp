function volume(){
	var x = document.getElementById('radius').value;
	alert(4 / 3 * Math.pow(x, 3) * Math.PI);
	return false;
}
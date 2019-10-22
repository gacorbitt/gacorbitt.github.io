function banner() {
	var d = new Date();
	var n = d.getDay();
	if (n == 5) {
		document.getElementById('banner').style.display = 'block';
	} 
	else {
		document.getElementById('banner').style.display = 'none';
	}
}
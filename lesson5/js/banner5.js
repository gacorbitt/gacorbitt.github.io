function banner() {
	var d = new Date();
	var n = d.getDay();
	if (n == 6) {
		document.getElementById('banner').style.display = 'block';
	} else {
		document.getElementById('banner').style.display = 'none';
	}
}
$(document).ready(function() {
		setInterval(function() {
		var time = new Date();
		var year = time.getFullYear();
		var month = time.getMonth() + 1;
		var day = time.getDate();
		var hour = time.getHours();
		var minute = time.getMinutes();
		var second = time.getSeconds();
		var date = year + '.' + month + '.' + day + ' ' + hour + ':' + minute + ':' + second;
		$('#digital').text(date);
	}, 1000);
});
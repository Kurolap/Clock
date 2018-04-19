$(document).ready(function() {
	setInterval(function() {
		var time = new Date();
		var year = time.getFullYear();
		var month = time.getMonth() + 1;
		var day = time.getDate();
		var hour = time.getHours();
		var minute = time.getMinutes();
		var second = time.getSeconds(); 
		
		if (month > 9) {
			month_0 = month;
		} else 	     {
			month_0 = '0' + month;
		}
		if (day > 9) {
			day_0 = day;
		} else 	     {
			day_0 = '0' + day;
		}
		if (minute > 9) {
			minute_0 = minute;
		} else 	        {
			minute_0 = '0' + minute;
		}
		if (second > 9) {
			second_0 = second;
		} else 	        {
			second_0 = '0' + second;
		}
		
		var date = year + '.' + month_0 + '.' + day_0 + ' ' + hour + ':' + minute_0 + ':' + second_0;
		$('#digital').text(date);
		
		$('#arrow').css({
		'transform': 'rotate(' + second*6 + 'deg)'
		});		
	}, 1000);
});



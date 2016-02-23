$(document).ready(function() {
	$(document).bind("mousemove", function(e) {
		// studio dist : 30px ~ 15root2
		
		// left proc
		var left_x = e.pageX - ($(".qube .left .pupil").offset().left+30);
		var left_y = e.pageY - ($(".qube .left .pupil").offset().top+30);
		
		var proport_l = 21.21 / Math.sqrt( Math.pow(left_x, 2) + Math.pow(left_y, 2) );
		$(".qube .h_left").css("right", 30-left_x * proport_l);
		$(".qube .h_left").css("top", 30+left_y * proport_l);
		
		// right proc
		var right_x = e.pageX - ($(".qube .right .pupil").offset().left+30);
		var right_y = e.pageY - ($(".qube .right .pupil").offset().top+30);
		
		var proport_r = 21.21 / Math.sqrt( Math.pow(right_x, 2) + Math.pow(right_y, 2) );
		$(".qube .h_right").css("right", 30-right_x * proport_r);
		$(".qube .h_right").css("top", 30+right_y * proport_r);
	});
});
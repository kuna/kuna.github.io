$(document).ready(function() {
	function bindqube(clsname, pos) {
	if ($("."+clsname).length <= 0)	return;
	$(document).bind("mousemove", function(e) {
		// studio dist : 30px ~ 15root2
		var p = pos/2 * Math.sqrt(2);

		// left proc
		var left_x = e.pageX - ($("."+clsname+" .left .pupil").offset().left+pos);
		var left_y = e.pageY - ($("."+clsname+" .left .pupil").offset().top+pos);
		
		var proport_l = p / Math.sqrt( Math.pow(left_x, 2) + Math.pow(left_y, 2) );
		$("."+clsname+" .h_left").css("right", pos-left_x * proport_l);
		$("."+clsname+" .h_left").css("top", pos+left_y * proport_l);
		
		// right proc
		var right_x = e.pageX - ($("."+clsname+" .right .pupil").offset().left+pos);
		var right_y = e.pageY - ($("."+clsname+" .right .pupil").offset().top+pos);
		
		var proport_r = p / Math.sqrt( Math.pow(right_x, 2) + Math.pow(right_y, 2) );
		$("."+clsname+" .h_right").css("right", pos-right_x * proport_r);
		$("."+clsname+" .h_right").css("top", pos+right_y * proport_r);
	});
	}

	bindqube("qube", 30);
	bindqube("qube_s", 10);
	
});

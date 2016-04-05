$('body').on('click', '.viewP', function() {
	// if (popUpOn) exit();

	var temp;
	console.log($(window).scrollTop());
	if ($(window).width() > 800) temp=$(window).scrollTop() + 50;
	else temp = $(window).scrollTop();
	$("#FSWrap").appendTo($('body'));
	$("#projectFS").appendTo($("FSWrap"));
	$("body").css("overflow-y", "hidden");
	$("#projectFS").css("top", temp);
	$("#projectFS").css("display", "block").hide();
	$("#projectFS").fadeIn(500);
});

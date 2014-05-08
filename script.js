$(document).ready(function() {
	$("#in").click(function() {
		$(this).toggleClass("state1");
		$(this).toggleClass("state2");

		$("#InSound")[0].load();
		$("#InSound")[0].play();
	});
});

$(document).ready(function() {
	$("#in").click(function() {
		$(this).toggleClass("state1");
		$(this).toggleClass("state2");

		$("#Sound")[0].load();
		$("#Sound")[0].play();
	});
});

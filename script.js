$(document).ready(function() {
	$("#in").click(function() {
		$(this).toggleClass("state1");
		$(this).toggleClass("state2");

		$("#sound")[0].load();
		$("#sound")[0].play();
	});
});

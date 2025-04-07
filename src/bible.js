
	window.history.pushState(null, null, window.location.href);
	window.onpopstate = function () {
		window.history.go(1);
	};
	function preventBack() {
		window.history.forward();
	}

	setTimeout("preventBack()", 0);
	window.onunload = function () {
		null
	};

(function ($) {
	$.fn.emailValidator = function () {

		// your code here
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(this.val());
	}

	$.fn.darrenValidator = function() {

		console.log("darren validator");
		return "darren";
	}
})(jQuery)

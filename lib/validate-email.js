(function ($) {
	$.fn.emailValidator = function () {
		var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		// console.log(re.test($(this).val()));
		// console.log($(this));
		return re.test($(this).val())
	}
})(jQuery)

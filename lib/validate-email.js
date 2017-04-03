(function ($) {
	$.fn.emailValidator = function (email) {
		return /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/gi.test(email[0].value);
	}
})(jQuery)

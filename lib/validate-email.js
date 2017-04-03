(function ($) {
	$.fn.emailValidator = function () {
		// your code here
		return /([\w-\.]+)@((?:[\w]+\.)+)([a-zA-Z]{2,4})/.test($(this).val())
	}
})(jQuery)

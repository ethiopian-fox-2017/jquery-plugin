(function ($) {
	$.fn.emailValidator = function () {
     let regex=/[\w\d].+@.+[\w\d][.].+[\w\d]/
		 return regex.test(this.val())
	}
})(jQuery)

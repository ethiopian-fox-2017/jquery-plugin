(function ($) {
	$.fn.emailValidator = function () {

		// your code here
			console.log(this.val())
			let email = this.val(),
					regExp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/igm
			if(regExp.test(email)){
				return true
			} else {
				return false
			}

	}
})(jQuery)

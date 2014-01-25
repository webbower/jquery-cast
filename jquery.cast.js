; (function($, undefined) {
	$.cast = function(str) {
		// If a non-string value was passed in, return that value, unmodified
		if(typeof str !== 'string')
		{
			return str;
		}

		var ret;
		
		// true boolean
		if(str === 'true') {
			ret = true;
		}
		// false boolean
		else if(str === 'false') {
			ret = false;
		}
		// null
		else if(str === 'null') {
			ret = null;
		}
		// empty string for undefined (might change this)
		else if(str.length === 0) {
			ret = undefined;
		}
		// Number
		else if(!isNaN(+str)) {
			ret = +str;
		}
		// Matches none of the above so just return the original string
		else {
			ret = str;
		}
		
		return ret;
	};
})(jQuery);
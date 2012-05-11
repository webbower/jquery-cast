; (function($, undefined) {
	$.cast = function(str) {
		if(typeof str !== 'string')
			return str;
		
		var ret;
		
		if(str === 'true')
			ret = true;
		else if(str === 'false')
			ret = false;
		else if(str === 'null')
			ret = null;
		else if(str.length === 0)
			ret = undefined;
		else if(!isNaN(+str))
			ret = +str;
		else
			ret = str;
		
		return ret;
	};
})(jQuery);
export var validator = {
	isNumber: function (num) {
		return num !== '' && !isNaN(num);
	},
	
	isEmail: function (str) {
		return str.indexOf('@') > 0;
	} 
};

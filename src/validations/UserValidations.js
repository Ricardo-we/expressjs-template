const Validator = require("./Validator");

module.exports = function validateUser(
	username,
	password,
	email,
	strict = false,
) {
	fields = [
		{ value: username, pattern: /[\w\d-_#$]{3,255}/ },
		{ value: email, pattern: /[\w\d-_#$]{3,255}/ },
		{
			value: password,
			pattern: /(?=.*[\_\-#$])+(?=.*\d)+[\w\d-_#$]{3,255}/,
		},
	];
	return Validator(fields, strict);
};

module.exports = function Validator(fields, strict = false) {
	for (const field of fields) {
		const required = strict ? true : field.required || false;

		if (required && field.value === "") {
			throw new Error(`Field is required`);
		}
		if (
			(field.value !== "" ||
				field.value !== undefined ||
				field.value !== null) &&
			field.pattern &&
			field.pattern instanceof RegExp &&
			!field.pattern.test(field.value)
		) {
			throw new Error(
				`Value ${field.value} doesnt follow the requested pattern`,
			);
		}
		if (field.min || field.max) {
			if (field.value?.length < field.min || field.value < field.min) {
				throw new Error(
					`Value ${field.value} is less than ${field.min}`,
				);
			}
			if (field.value?.length > field.max || field.value > field.max) {
				throw new Error(
					`Value ${field.value} is more than ${field.min}`,
				);
			}
		}
	}
	return true;
};

/*  
	if strict == true, all fields are required
    FIELDS = [
        {value: "ricardo", errorMessage: "Error", required?: boolean, min?:number, max?: number, pattern?: RegExp }
    ]
*/

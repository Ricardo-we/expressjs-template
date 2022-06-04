const express = require("express");

class BaseController {
	constructor(routeName, routeParams = "id") {
		this.status = 200;
		this.routeName = routeName;
		this.routeParams = routeParams;
	}

	post(request = express.request, response = express.response) {}

	get(request = express.request, response = express.response) {}

	getOne(request, response) {}

	put(request = express.request, response = express.response) {}

	delete_(request = express.request, response = express.response) {}
}

function errorResponse(error, res, errorMessage = `${error}`) {
	let status = 410;
	if (error instanceof TypeError || error instanceof SyntaxError)
		status = 500;
	else if (error instanceof Error || error instanceof ReferenceError)
		status = 400;
	return res.status(status).send(errorMessage);
}

module.exports = {
	BaseController,
	errorResponse,
};

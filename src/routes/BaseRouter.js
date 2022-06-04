const { Router } = require("express");
const BaseController = require("./../controllers/BaseController");

class BaseRouter {
	constructor(
		routeName = "",
		params = ":id",
		controller = new BaseController(),
	) {
		this.router = Router();
		this.routeName = routeName;
		this.params = params;
		this.controller = controller;
		this.createRoutes(this.controller);
	}

	createRoutes(controller, putParams, deleteParams, getOneParams) {
		this.router.get(`${this.routeName}`, controller.get);
		this.router.get(
			`${this.routeName}/${getOneParams || this.params}`,
			controller.getOne,
		);
		this.router.post(`${this.routeName}`, controller.post);
		this.router.put(
			`${this.routeName}/${putParams || this.params}`,
			controller.put,
		);
		this.router.delete(
			`${this.routeName}/${deleteParams || this.params}`,
			controller.delete_,
		);
	}

	getRouter() {
		return this.router;
	}
}

module.exports = BaseRouter;

const { BaseController, errorResponse } = require("./BaseController");
const User = require("../models/User");
const userValidation = require("../validations/userValidations");

class UserController extends BaseController {
	constructor() {
		super();
	}

	async post(req, res) {
		try {
			const { username, password, email } = req.body;
			userValidation(username, password, email, true);
			const user = await User.create({ username, password, email });
			res.json(user);
		} catch (error) {
			errorResponse(error, res);
		}
	}

	async get(req, res) {
		try {
			const user = await User.findAll();
			res.status(200).json(user);
		} catch (error) {
			errorResponse(error, res);
		}
	}

	async getOne(req, res) {
		try {
			const { id } = req.params;
			const user = await User.findOne({ where: { id } });
			res.json(user);
		} catch (error) {
			errorResponse(error, res);
		}
	}

	async put(req, res) {
		try {
			const { id } = req.params;
			const { username, password, email } = req.body;
			userValidation(username, password, email);
			const user = await User.update(
				{ username, password, email },
				{
					where: {
						id,
					},
				},
			);
			res.json(user);
		} catch (error) {
			errorResponse(error, res);
		}
	}

	async delete_(req, res) {
		try {
			const { id } = req.params;
			const user = User.destroy({ where: { id } });
			res.json(user);
		} catch (error) {
			errorResponse(error, res);
		}
	}
}

module.exports = UserController;

const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(process.env.DB_URL);
const authenticate = async (sequelize) => {
	try {
		await sequelize.authenticate();
		console.log("Connection has been established successfully.");
	} catch (error) {
		console.error("Unable to connect to the database:", error);
	}
};

const DB = {
	sequelize,
	authenticate: () => authenticate(sequelize),
};

module.exports = DB;

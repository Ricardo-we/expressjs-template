const DB = require("./DB.config");
const { DataTypes } = require("sequelize");
const { IDField } = require("./BaseFields");

const User = DB.sequelize.define("User", {
	id: IDField,
	username: {
		type: DataTypes.STRING(255),
		unique: true,
		allowNull: false,
	},
	password: {
		type: DataTypes.STRING(255),
	},
	email: {
		type: DataTypes.STRING(255),
	},
});

module.exports = User;

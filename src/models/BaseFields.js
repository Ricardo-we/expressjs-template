const { DataTypes } = require("sequelize");

const IDField = {
	type: DataTypes.INTEGER,
	autoIncrement: true,
	primaryKey: true,
};

module.exports = {
	IDField,
};

const User = require("./User");

const syncTables = (forceAll = false, alterAll = false) => {
	try {
		User.sync({ alter: alterAll, force: forceAll });
	} catch (error) {
		return false;
	}
	return true;
};

module.exports = syncTables;

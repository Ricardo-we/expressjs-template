const express = require("express");
const DB = require("./models/DB.config");
const syncTables = require("./models/syncTables");
const app = express();
const userRouter = require("./routes/user.routes");

app.use(express.json());
app.use(userRouter.getRouter());

app.get("/db/create-all", (req, res) => {
	try {
		DB.authenticate();
		syncTables(true);
		res.status(200).json({ message: "success" });
	} catch (error) {
		res.status(500).json({ message: "failed" });
	}
});

module.exports = app;

const app = require("./app");
const DB = require("./models/DB.config");

const port = process.env.PORT || 5000;

app.listen(port);

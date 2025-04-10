const mongoose = require("mongoose");
require("dotenv").config();
const connection  = mongoose.connect (process.env.MONGO_URI + "asana_clone")
module.exports = connection;
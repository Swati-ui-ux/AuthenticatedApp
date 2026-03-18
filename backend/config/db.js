const mongoose = require("mongoose")
mongoose.connect(process.env.CONNECTION_STRING).then(() => console.log("Db connected")).catch((err) => console.log("Error when connect db", err))

module.exports = mongoose
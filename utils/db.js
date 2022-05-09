const mongoose = require("mongoose");

exports.connectDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URI);

		console.log("Connected To Database");
	} catch (error) {
		console.error(`Error : ${error.message}`);
		process.exit(1);
	}
};

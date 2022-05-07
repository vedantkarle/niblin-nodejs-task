const express = require("express");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 5000;

const authRoutes = require("./routes/auth.routes");

app.use(express.json());

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
	console.log("listening on port", PORT);
});

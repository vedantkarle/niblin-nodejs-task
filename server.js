const express = require("express");
const { connectDB } = require("./utils/db");
const { notFound, errorHandler } = require("./middlewares/error");
require("dotenv").config();

const PORT = process.env.PORT || 5000;

const authRoutes = require("./routes/auth.routes");
const bookRoutes = require("./routes/book.routes");

const app = express();

connectDB();

app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/books", bookRoutes);

app.use(notFound);

app.use(errorHandler);

app.listen(PORT, () => {
	console.log("listening on port", PORT);
});

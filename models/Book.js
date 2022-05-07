const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = Schema(
	{
		name: {
			type: String,
			required: true,
		},
		imageUrl: {
			type: String,
			default: "https://www.biotrop.org/images/default-book.png",
		},
		author: {
			type: String,
			required: true,
		},
		pages: {
			type: Number,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
	},
	{ timestamps: true },
);

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;

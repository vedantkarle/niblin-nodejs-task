const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = Schema(
	{
		name: {
			type: String,
			required: [true, "Book name is required"],
		},
		imageUrl: {
			type: String,
			default: "https://www.biotrop.org/images/default-book.png",
		},
		author: {
			type: String,
			required: [true, "Book author is required"],
		},
		pages: {
			type: Number,
			required: [true, "Book pages are required"],
		},
		price: {
			type: Number,
			required: [true, "Book price is required"],
		},
	},
	{ timestamps: true },
);

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;

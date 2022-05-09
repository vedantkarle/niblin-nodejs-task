const Book = require("../models/Book");
const asyncHandler = require("express-async-handler");

exports.getAllBooks = asyncHandler(async (req, res) => {
	const books = await Book.find({});

	if (books?.length === 0) {
		return res.status(404).send("No books found!");
	}

	res.status(200).send(books);
});

exports.getSingleBook = asyncHandler(async (req, res) => {
	const { name } = req.params;

	const book = await Book.findOne({ name });

	if (!book) {
		return res.status(404).send("No book with that name found!");
	}

	res.status(200).send(book);
});

exports.searchSingleBook = asyncHandler(async (req, res) => {
	const queryObj = { ...req.query };

	Object.keys(queryObj).forEach(el => {
		if (typeof queryObj[el] === undefined || queryObj[el] === "") {
			delete queryObj[el];
		}
	});

	book = await Book.findOne(queryObj);

	if (!book) {
		return res.status(404).send("No book found");
	}

	res.status(200).send(book);
});

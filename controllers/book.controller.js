const Book = require("../models/Book");
const asyncHandler = require("express-async-handler");
const mongoose = require("mongoose");

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

exports.createBook = asyncHandler(async (req, res) => {
	const { name, author } = req.body;

	const alreadyExists = await Book.findOne({ name, author });

	if (alreadyExists)
		return res
			.status(400)
			.send("A book with this name and author already exists");

	const book = await Book.create(req.body);

	res.status(201).send(book);
});

exports.updateBook = asyncHandler(async (req, res) => {
	const { id } = req.params;

	if (!mongoose.Types.ObjectId.isValid(id)) {
		return res.status(404).send("No book found with this id ");
	}

	const book = await Book.findOne({ _id: id });
});

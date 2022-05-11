const Book = require("../models/Book");
const asyncHandler = require("express-async-handler");

exports.getAllBooks = asyncHandler(async (req, res) => {

	let page = req.query.page,itemsPerPage = req.query.itemsPerPage;

	page = +page > 0 ? +page : 1;
	itemsPerPage = +itemsPerPage > 0 ? +itemsPerPage : 5

	const books = await Book.find({}).skip((page - 1) * itemsPerPage).limit(itemsPerPage);

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

	const book = await Book.findOne({ _id: id });

	if(!book){
		return res.send("No book found with this id")
	}

	 await Book.updateOne({_id:id},{
		name:req.body.name || book.name,
		author:req.body.author || book.author,
		pages:req.body.pages || book.pages,
		price:req.body.price || book.price,
		imageUrl:req.body.imageUrl || book.imageUrl
	});

	res.send("Book updated successfully");

});

exports.deleteBook = asyncHandler(async (req, res) => {
	const { id } = req.params;

	const book = await Book.findOne({ _id: id });

	if(!book){
		return res.send("No book found with this id")
	}

	 await Book.deleteOne({_id:id});

	res.send("Book deleted successfully");

});

const express = require("express");
const {
	getAllBooks,
	getSingleBook,
	searchSingleBook,
	createBook,
	updateBook,
	deleteBook
} = require("../controllers/book.controller");
const router = express.Router();
const { protect } = require("../middlewares/auth");
const { checkApiKey } = require("../middlewares/apiKey");

router.post("/getAll", checkApiKey,protect, getAllBooks);
router.post("/search", checkApiKey,protect, searchSingleBook);
router.post("/create", checkApiKey,protect, createBook);
router.put("/update/:id", checkApiKey,protect, updateBook);
router.delete("/delete/:id",checkApiKey,protect,deleteBook)
router.post("/:name", checkApiKey,protect, getSingleBook);

module.exports = router;

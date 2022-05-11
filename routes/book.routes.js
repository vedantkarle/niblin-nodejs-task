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

router.get("/getAll", protect, getAllBooks);
router.get("/search", protect, searchSingleBook);
router.post("/create", protect, createBook);
router.put("/update/:id", protect, updateBook);
router.delete("/delete/:id",protect,deleteBook)
router.get("/:name", protect, getSingleBook);

module.exports = router;

const express = require("express");
const {
	getAllBooks,
	getSingleBook,
	searchSingleBook,
} = require("../controllers/book.controller");
const router = express.Router();
const { protect } = require("../middlewares/auth");

router.get("/getAll", protect, getAllBooks);
router.get("/search", protect, searchSingleBook);
router.get("/:name", protect, getSingleBook);

module.exports = router;

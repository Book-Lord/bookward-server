const express = require('express');
const router = express.Router()
const {
    userMiddleware,
    reviewMiddleware,
    reviewOwnershipMiddleware
} = require("../middlewares/middleware")
const supabase_middleware = require('../middlewares/authenticationMiddleware');
const {
    getBookReviews,
    postBookReview,
    deleteBookReview,
    upvoteBookReview
} = require("../services/reviewsService")

router.get("/reviews/:bookId", getBookReviews);
router.post("/reviews", supabase_middleware, postBookReview);
router.delete("/reviews/:bookId", reviewOwnershipMiddleware, deleteBookReview);
router.put("/reviews/upvote/:reviewId", reviewMiddleware, supabase_middleware, upvoteBookReview);

module.exports = router;
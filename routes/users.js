const express = require('express');
const router = express.Router()
const {
    userMiddleware
} = require("../middlewares/middleware");
const supabase_middleware = require('../middlewares/supabase-middleware');
const {
    getUserInfo,
    saveBook,
    followUser,
    searchUsers
} = require("../services/userService")

router.post("/users/:userId", userMiddleware, getUserInfo);
router.post("/saveBook", userMiddleware, saveBook);
router.post("/followUser", userMiddleware, followUser);
router.get("/searchUsers/:username", supabase_middleware, searchUsers);

module.exports = router;
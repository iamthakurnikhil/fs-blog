const multer = require("../middleware/multer");
const { createPost, deletePost, updatePost, getPost, getFeaturedPost, getPosts, searchPost, getRelatedPost, uploadImage } = require("../controllers/post");
const { postValidator, validate } = require("../middleware/postValidator");
const { parseData } = require("../middleware");
const { updateMany } = require("../model/post");

const router = require("express").Router();


router.post("/create",multer,
parseData,
postValidator, validate, createPost);

router.put("/:postId", multer,parseData,postValidator,validate,updatePost )

router.delete('/:postId', deletePost);

router.get("/single/:slug", getPost);

router.get("/featured-posts", getFeaturedPost);

router.get('/posts', getPosts);

router.get('/search', searchPost);

router.get('/relatedPosts/:postId', getRelatedPost);

router.post("/upload-image", multer, uploadImage);

module.exports = router;
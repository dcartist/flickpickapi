const express = require("express");
const router = express.Router();
const controller = require("../controllers/OldMovieController");

router.get("/", controller.getRandomMovies);
router.get("/movies", controller.getRandomMovies);
router.get("/movies/allmovies", controller.getAllMovies);
router.get("/allmovies", controller.getAllMovies);
router.get("/:id", controller.getById);
router.get("/search/:title", controller.searchByTitle);

module.exports = router;

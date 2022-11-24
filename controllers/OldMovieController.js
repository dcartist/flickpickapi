const OldMovie = require("../db/models/OldMovie");

function addDetailsToArray(data) {
  var response = {};
  response.count = data.length;
  response.results = data;
  return response;
}

module.exports = {
  getAllMovies: (req, res) => {
    OldMovie.find({}).then(m => res.json(addDetailsToArray(m)));
  },
  getRandomMovies: (req, res) => {
    var skipCount = Math.floor(Math.random() * 1979);
    OldMovie.find({})
      .skip(skipCount)
      .limit(21)
      .then(m => res.json(addDetailsToArray(m)));
  },
  getById: (req, res) => {
    OldMovie.find({ id: req.params.id }).then(m => res.json(addDetailsToArray(m)));
  },
  searchByTitle: (req, res) => {
    OldMovie.find({ title: new RegExp(req.params.title, "ig") }).limit(21).then(m =>
      res.json(addDetailsToArray(m))
    );
  },
  deleteMovie: (req, res) => {
    res.json({ test: "Yes" });
  }
};

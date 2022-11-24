const express = require("express");
const parser = require("body-parser");
const passport = require("passport");
const cors = require("cors");

const MovieRouter = require("./routes/MovieRouter");
const OldMovieRouter = require("./routes/OldMovies");
const GenreRouter = require("./routes/GenreRouter");
const UserRouter = require("./routes/UserRouter");

const app = express();

app.use(parser.json());
app.use(cors());
app.use(express.json());

app.use(passport.initialize());
require("./config/passport")(passport);

app.use("/api/movies/", MovieRouter);
app.use("/api/genre/", GenreRouter);
app.use("/api/user/", UserRouter);
app.use("/api/old/", OldMovieRouter);


var port = process.env.PORT || 3000;

app.listen(port, function () {
  console.log('Example app listening on port ' + port + '!');
});

// app.set("port", process.env.PORT || 3000);

// app.listen(app.get("port"), () => {
//   console.log(`✅ PORT: ${app.get("port")} 🌟`);
// });

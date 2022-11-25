
// const mongoose = require('mongoose');
// mongoose.Promise = Promise;

// let mongoURI = '';
// if (process.env.NODE_ENV === "production") {
// 	mongoURI = process.env.DB_URL;
// } else {
// 	mongoURI = 'mongodb://localhost/flickpick-api';
// }


// mongoose.connect(
// 	process.env.DB_URL || 'mongodb://localhost/flickpick-api',
// 	{
// 		useNewUrlParser: true,
// 		useFindAndModify: false,
// 		useUnifiedTopology: true
// 	},
//   );

// mongoose.connect(mongoURI, { useNewUrlParser: true })
// .then((conn) => {
// 	console.log(`connected to mongodb on ${conn.connections[0].name} db`)
// })
// .catch(err => {
// 	console.error(err)
// });

// module.exports = mongoose



const mongoose = require('mongoose')
mongoose.Promise = Promise
let mongoURI = "";
if (process.env.NODE_ENV === "production") {
    mongoURI = process.env.DB_URL;
} else {
    mongoURI = "mongodb://localhost:27017/flickpick-api";
}
mongoose
    .connect(mongoURI, { useNewUrlParser: true })
    .then(instance => console.log(`Connected to db: ${instance.connections[0].name}`)) //instance is what the database that your are connected to
    .catch(error => console.log('Connection failed!', error))

module.exports = mongoose
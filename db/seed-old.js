require('./connection');
const Genre = require('./models/OldGenre');
const Movie = require('./models/OldMovie');
const allgenres = require('./allgenre.json');
const allmovies = require('./allmovies.json');

Genre.deleteMany({}).then(()=>{
    Movie.deleteMany({}).then(()=>{
    
        Movie.insertMany(allmovies.results).then((movieresults)=>{
            console.log(movieresults)
            Genre.insertMany(allgenres).then((results)=>{
            console.log(results)
            })
        })
    })
    
}).catch(function(error){
    console.log(error)      // Failure
});
// console.log(allmovies.results)
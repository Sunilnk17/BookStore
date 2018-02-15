var mongoose = require('mongoose');


var genreSchema = mongoose.Schema({
	name:{
		type:String,
	    required:true
	},
	create_date:{
		type:Date,
		default:Date.now
	}
});

var Genre = module.exports = mongoose.model('Genre',genreSchema);


//get Genres

module.exports.getGenres = function (callback,limit) {
	// body...
	Genre.find(callback).limit(limit);
}

//Add Genres


module.exports.addGenres = function (genre,callback) {
	// body...
	Genre.create(genre,callback);
}

module.exports.updateGenres = function (id,genre,callback) {
	// body...

	var query = {_id:id};

	var update = {
		name:genre.name
	}

	Genre.findOneAndUpdate(query,update, callback);
}
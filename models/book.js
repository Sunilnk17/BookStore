var mongoose = require('mongoose');


var bookSchema = mongoose.Schema({
	title:{
		type:String,
	    required:true
	},
	genre:{
		type:String
	},
	description:{
		type:String
	},
	author:{
		type:String
	},
	image_url:{
		type:String
	},
	buy_url:{
		type:String
	},
	create_date:{
		type:Date,
		default:Date.now
	}
});

var Book = module.exports = mongoose.model('Book',bookSchema);


//get Genres

module.exports.getBooks = function (callback,limit) {
	// body...
	Book.find(callback).limit(limit);
}

module.exports.getBookById = function (bookid,callback) {
	// body...
	Book.findById(bookid,callback);
}

module.exports.addBook = function (book,callback) {
	// body...
	Book.create(book,callback);
}



module.exports.updateBook = function (id,book,callback) {
	// body...

	var query = {_id:id};

	var update = {
		title:book.title,
		genre:book.genre,
		description:book.description,
		author:book.author,
		image_url:book.image_url,
		buy_url:book.buy_url,
	}

	Book.findOneAndUpdate(query,update, callback);
}
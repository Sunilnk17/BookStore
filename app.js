var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require("mongoose");


app.use(bodyParser.json());

Genre = require('./models/genre');
Book =  require('./models/book');

mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;


//Landing Page

app.get('/',function (req,res) {
	// body...
	res.send('Please use api/books or api/genres');
});


//get Genres

app.get('/api/genres',function(req,res){

	Genre.getGenres(function (err,genres) {
		// body...
		if(err){
			throw err;
		}

		res.json(genres);
	});	
});

//add Genres

app.post('/api/genres',function(req,res){

	var genre = req.body;
	Genre.addGenres(genre,function (err,genres) {
		// body...
		if(err){
			throw err;
		}

		res.json(genres);
	});	
});

//update Genre
app.put('/api/genres/:_id',function(req,res){

	var genre = req.body;
	Genre.updateGenres(req.params._id,genre,function (err,genres) {
		// body...
		if(err){
			throw err;
		}

		res.json(genres);
	});	
});


app.delete('/api/genres/:_id',function(req,res){

	Genre.deleteGenre(req.params._id,function (err,genres) {
		// body...
		if(err){
			throw err;
		}

		res.json(genres);
	});	
});


//get Books

app.get('/api/books',function(req,res){

	Book.getBooks(function (err,books) {
		// body...
		if(err){
			throw err;
		}
		res.json(books)
	})

});

//get Books by ID

app.get('/api/books/:_id',function(req,res){

	Book.getBookById(req.params._id,function (err,book) {
		// body...
		if(err){
			throw err;
		}
		res.json(book);
	})

});


//add book to db

app.post('/api/books',function(req,res){

	var book = req.body;
	Book.addBook(book,function (err,books) {
		// body...
		if(err){
			throw err;
		}
		res.json(books)
	})

});

// update Book
app.put('/api/books/:_id',function(req,res){

	var book = req.body;
	Book.updateBook(req.params._id,book,function (err,books) {
		// body...
		if(err){
			throw err;
		}

		res.json(books);
	});	
});

app.delete('/api/books/:_id',function(req,res){

	Book.deleteBook(req.params._id,book,function (err,books) {
		// body...
		if(err){
			throw err;
		}

		res.json(books);
	});	
});


app.listen(3000);
console.log("Running...");
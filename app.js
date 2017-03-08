var express = require('express');
var app = express();
// var scrape = require('./scrapper/scrape');
var cheerio = require('cheerio');
var request = require('request');
var http = require("http");



var feedList = [];

app.get('/', function (req, res) {

	var hlol = request('https://www.reddit.com/r/thedivision/', function(err, res, html){
		var lol = cheerio.load(html);

		var vlol = lol('.entry.unvoted .title .title.may-blank').each(function(i, element) {
			var node = lol(this);
			var text = node.text();
			// console.log(text);
			feedList[i] = text;
			return feedList;
		});
		return feedList;
	});
	res.send(feedList);
	console.log(feedList);
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
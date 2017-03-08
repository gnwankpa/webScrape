var cheerio = require('cheerio'),
    $ = cheerio.load('<h2 class = "title">Hello world</h2>');

$('h2.title').text('Hello there!');
$('h2').addClass('welcome');
$.html();

var x = $((this).text());

// function x() {
// 	return y;
// }
// var x = "Hello World";

module.exports = x;


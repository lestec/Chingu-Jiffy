var mongoose = require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var QuoteSchema = new mongoose.Schema({
  author: String,
  genre: String,
  quote: String
});

QuoteSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("Quote", QuoteSchema);
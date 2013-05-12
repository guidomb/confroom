var mongoose = require('mongoose');
var validate = require('mongoose-validator').validate;

// Validators
var titleValidator = [ validate('len', 1, 32) ];
var descriptionValidator = [ validate('len', 1, 140) ];
var slidesUrlValidator = [ validate('len', 1, 1000), validate('isUrl') ];

// Schema
var SessionSchema =  mongoose.Schema({
  title: { type: String, required: true, validate: titleValidator },
  description: { type: String, required: true, validate: descriptionValidator },
  slidesUrl: { type: String, required: true, validate: slidesUrlValidator }
});

mongoose.model('Session', SessionSchema);
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var wallSchema = new Schema({
  room: {type: String, required: true},
  colors: {type: String, required: true},
  include: {type: String, required: true},
  not_include: {type: String, required: true},
  theme: {type: String, required: true},
  created_at: Date;
});

listingSchema.pre('save', function(next) {
  if(!this.created_at){
    this.created_at = Date.now;
  }
  next();
});

var wall_info = mongoose.model('wall_info', wallSchema);

module.exports = wall_info;

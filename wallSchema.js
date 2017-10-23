var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var wallSchema = new Schema({
  dimensions: {
    length: {type: String, required: true},
    height: {type: String, required: true}
  },
  loc_type: {required: true},
  material: {required: true},
  finish: {required: true},
  paint: {type: String},
  paint_type: {type: String},
  prep_req: {required: true},
  prep: {type: String},
  paint_req: {required: true},
  recolor: {type: String},
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

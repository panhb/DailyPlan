var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlanSchema = new Schema({
	user_id: { type: String},
  	title: {type: String},
  	content: { type: String},
  	start_time: { type: String},
  	end_time: { type: String},
  	create_time: { type: Date, default: Date.now }
});

PlanSchema.index({create_time: -1});

mongoose.model('Plan', PlanSchema);
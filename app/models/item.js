var mongoose = require('mongoose');


var ItemSchema = new mongoose.Schema({
	item_id: {
		type: Number
	},
	name: {
		type: String
	},
}, {timestamps: true});

ItemSchema.methods.toJSON = function() {
	var obj = this.toObject()
	delete obj.__v
	delete obj._id
	return obj
}

const Item = mongoose.model('items', ItemSchema, 'items');
module.exports = Item;

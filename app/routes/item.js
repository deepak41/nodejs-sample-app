var Item = require("../models/item");


module.exports = function(router) {
	'use strict';


	// home route, url: /api/item
	router.route('/')
		.get(function(req, res, next) {
			console.log("Inside /api/item route!!!");
			res.json({
				error: "false",
				message: "Inside /api/item route!!!",
				data: null
			})	
		});
	
	
	// route1, url: /api/item/create
	router.route('/create')
		.post(function(req, res, next) {
			console.log("Inside /api/item/create route!!!");
			Item.create(req.body, (err, doc) => {
				if(err) return next(err);
				console.log("Data inserted successfully!!!");
				res.json({
					error: "false",
					message: "Data inserted successfully!!!",
					data: doc
				})	  
		    })
		});
}

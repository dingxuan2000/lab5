var data = require("../data.json");

exports.addFriend = function(request, response) {  
	// Your code goes here
	var newdata = {
			"name": request.query.name,
			"description": request.query.description,
			"imageURL": "http://lorempixel.com/400/400/people"
	};
	console.log(data);
	data.friends.push(newdata);
	//push new data into queue
	console.log(data);
	response.render('index',data);
}
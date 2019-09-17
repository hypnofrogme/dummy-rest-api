var express = require("express");
var app = express();

app.listen(3000, () => {
	 console.log("Server running on port 3000");
});

app.get("/dogs", (req, res, next) => {
	 res.json(
		[
			{
				"cat0": {
					"name": "pipo",
					"age": 4
				}
			},
			{
				"name": "tobi",
				"age": 5
			}
		]
	 );
});

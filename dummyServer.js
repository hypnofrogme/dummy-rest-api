var express = require("express");
var app = express();

app.listen(80, () => {
	 console.log("Server running on port 80");
});

app.get("/dogs", (req, res, next) => {
	 res.json(
		[
			{
				"group_0": {
					"name": "pipo",
					"age": 4
				}
			},
			{
				"group_1": {
					"name": "tobi",
					"age": 5
				}
			}
		]
	 );
});

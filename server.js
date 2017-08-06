
var bodyParser = require("body-parser");
var express = require("express");
var path = require("path");
//require packages 

var app = express();
//set connection//
var PORT = process.env.PORT || 8080;

app.use(bodyParser.json());

 app.use(bodyParser.urlencoded({ extended: false }));
 //app.use(bodyParser.text());
 //app.use(bodyParser.json({ type: "application/vnd.api+json" }));

//routes to our pages//

require("./routing/apiRoutes.js")(app);
require('./routing/htmlRoutes.js')(app);

//listens to see if port is connected/listening//

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});

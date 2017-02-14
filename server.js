var express = require('express');

// Create the App
var app = express();

app.use(express.static('public'));

app.listen(3000, function() {
  console.log("Run on port 3000");
});

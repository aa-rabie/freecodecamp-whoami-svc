// server.js
// where your node app starts

// init project
var express = require("express");
var app = express();
var useragent = require("useragent");
var ip = require("ip");

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
var cors = require("cors");
app.use(cors({ optionSuccessStatus: 200 })); // some legacy browsers choke on 204


// your first API endpoint...
app.get("/api/whoami", function(req, res) {
  var agent = useragent.parse(req.headers["user-agent"]);
  res.json({
    ipaddress: ip.address(),
    language: req.headers["accept-language"],
    software: req.headers["user-agent"]
  });
});

// listen for requests :)
var listener = app.listen(process.env.PORT, function() {
  console.log("Your app is listening on port " + listener.address().port);
});

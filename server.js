let express = require("express");
let port = 8080;
app = express();

app.get("/", 
  function(request, response) {
    response.end("Hello there!!!");
  }
);

app.listen(port, function() {
  console.log("Server listening on port " + port);
});

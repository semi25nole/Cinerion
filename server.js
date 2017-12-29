let express = require("express");

let app = express();

const port = process.env.PORT || 3000;

app.listen(port, function() {
    console.log("App is running on port " + port);
});

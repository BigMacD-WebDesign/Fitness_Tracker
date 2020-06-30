//Requirements.
const express = require("express");
const mongoose = require('mongoose');

//Adding and connecting database to Heroku
mongoose.connect('mongodb://User:Password123@ds023398.mlab.com:23398/heroku_6f6mw4hl',
 {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify:false});

const PORT = process.env.PORT || 8080;

const app = express();

//Standard syntax for express functionality.
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("Develop/public"));

//Requirement for retrieving data in the routes.js.
app.use(require("./routes/routes.js"));


//Code to start app and listen for user input.
app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`);
});

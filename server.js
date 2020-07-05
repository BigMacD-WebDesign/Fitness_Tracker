//Requirements.
const express = require("express");
const mongoose = require('mongoose');

//Adding and connecting database to Heroku
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/workout",
  {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
  });

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

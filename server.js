const express = require("express");
const mongoose = require('mongoose');
mongoose.connect('mongodb://User:Password123@ds023398.mlab.com:23398/heroku_6f6mw4hl',
 {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify:false});

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("Develop/public"));

app.use(require("./routes/routes.js"));

app.listen(PORT, () => {
    console.log(`App listening on ${PORT}`);
});

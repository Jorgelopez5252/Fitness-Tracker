// Server file that sets up server and connects to database
const express = require("express");
const mongoose = require("mongoose");
//declaring port
const PORT = process.env.PORT || 3000;

//initialize express
const app = express();

//middleware to parse data
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"));
//connect to database
mongoose.connect("mongodb://Jorge:Tony1738@ds253428.mlab.com:53428/heroku_zvkh0pt1", {
  useNewUrlParser: true,
  useFindAndModify: false
});
//require routes
app.use(require("./routes/api.js"));
app.use(require("./routes/html.js"));

//app listen

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  
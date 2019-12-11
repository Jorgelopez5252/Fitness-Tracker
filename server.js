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
mongoose.connect("mongodb://localhost/fitnessdb", {
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
  
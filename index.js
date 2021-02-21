const express = require("express");
const path = require("path");
const members = require("./members");
const logger = require("./middleware/logger")

const app = express();


//Init middleware
app.use(logger);
//Body Parser Middleware
app.use(express.json())
app.use(express.urlencoded({
  extended: false
}
))

//Get static folder
app.use(express.static(path.join(__dirname, "public")));
//Member API Routes
app.use('/api/members', require('./routes/api/members'))

//Create Member


const PORT = process.env.PORT || 5000;

app.listen(PORT, (req, res) => console.log(`Server started in ${PORT}`));

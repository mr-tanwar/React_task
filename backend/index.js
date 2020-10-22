const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// Bringing PORT from config.js
const { PORT } = require("./config");

// Intializing the application

const app = express();

//adding middleware

app.use(cors());
app.use(bodyParser.json());

//Adding Route

app.use("/api/users", require("./routes/userRoute"));

//Listening the Port

app.listen(PORT, () => console.log("Server Listening on PORT= ", PORT));

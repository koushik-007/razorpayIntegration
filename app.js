const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const paymentRoute = require("./paymentRoute");
const mongoose = require("mongoose");
const app = express();
const path = require("path");

//Mongodb connection
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ylujz.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(
    uri, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true}
)
.then(() => {
    console.log('Database Connected');
})
.catch(() => console.log("FAILED TO CONNET WITH DB"));

app.use(bodyParser.json());
app.use(cors());

app.use("/api", paymentRoute);

app.listen(5000, () => {
  console.log(`App is running at 5000 port`);
});
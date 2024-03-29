const express = require("express");
require("dotenv").config();
const cors = require("cors");
const path = require("path");
const connectDB = require("./Models/connectDB");
const app = express();

const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.static(path.resolve(__dirname, "./client/build")));
app.use(express.json());

// routes

// routers

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`Express Server is listening on port: ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();

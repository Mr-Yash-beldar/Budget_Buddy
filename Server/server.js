const express=require("express");
const dotenv =require("dotenv");

const connectDB =require("./config/database.js");

dotenv.config();

connectDB();

const app = express(); // main thing

  app.get("/", (req, res) =>
    res.send("Server is Running")
  );

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server  is started on port ${PORT}..`
  )
);
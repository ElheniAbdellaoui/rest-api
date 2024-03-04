const express = require("express");
const { connect } = require("mongoose");
const User = require("./models/User");
require("dotenv").config({ path: "./config/.env" });

const app = express();

app.use(express.json());
connect();

app.post("/add", async (req, res) => {
  const { fullName, phone, email } = req.body;
  try {
    const newUser = new User({
      fullName,
      email,
      phone,
    });
    await newUser.save();
    res.send(newUser);
  } catch (error) {
    console.log(error);
  }
});
PORT = process.env.port || 5000;
app.listen(PORT, (err) =>
  err ? console.log(err) : console.log(`Server is running on port ${PORT}`)
);

const mongoose = require("mongoose");
const express = require("express");
const app = express();
app.use(express.json());
mongoose.connect(
  "mongodb+srv://vivek:vivekDB@cluster0.ghobujw.mongodb.net/userappnew"
);

const User = mongoose.model("User", {
  name: String,
  email: String,
  password: String,
});

app.post("/users", async function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  const name = req.body.name;
  const userExists = await User.findOne({ email: username });
  if (userExists) {
    return res.status(400).json({ msg: "User already exists" });
  }
  const user = new User({
    name: name,
    email: username,
    password: password,
  });
  user.save();
  res.json({ msg: "User created successfully" });
});
app.listen(3000);

const express = require("express");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.get("/health-checkup", (req, res) => {
  const username = req.headers.username;
  const password = req.headers.password;
  const kidneyId = req.query.kidneyId;
  if (!(username === "vivek" && password === "pass")) {
    res.status(400).json({
      msg: "Something went wrong",
    });
    return;
  }
  if (!(kidneyId == 1 || kidneyId == 2)) {
    res.status(400).json({
      msg: "Something went wrong",
    });
    return;
  }
  res.json({
    msg: "Your kidney is fine",
  });
});

app.listen(8000, () => {
  console.log("Server has started");
});

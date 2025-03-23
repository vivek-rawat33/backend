const express = require("express");
const app = express();

app.use(express.json());

const zod = require("zod");
const schema = zod.array(zod.number());
app.use((req, res, next) => {
  req.startTime = new Date().getTime();
  next();
});

function authenticate(obj) {
  const schema = zod.object({
    username: zod.string(),
    password: zod.string(),
  });
  const response = schema.safeParse(obj);
  return response;
}
function userMiddleWare(req, res, next) {
  const username = req.headers.username;
  const password = req.headers.password;
  if (username != "vivek" || password != "pass") {
    res.status(403).json({
      msg: "Something went wrong",
    });
  } else {
    next();
  }
}

function middleWare2(req, res, next) {
  const kidneyId = req.query.kidneyId;
  if (!(kidneyId == 1 || kidneyId == 2)) {
    res.status(400).json({
      msg: "Something went wrong",
    });
    return;
  } else {
    next();
  }
}

app.get("/checkup", (req, res) => {
  const endTime = new Date().getTime();
  console.log(`time to execute the request is ${endTime - req.startTime}ms`);
  const input = authenticate(req.body);
  if (!input.success) {
    res.status(411).json({
      msg: "invalid input",
    });
    return;
  }
  res.send("Your health is good");
});

app.post("/kidney-checkup", (req, res) => {
  const kidneys = req.body.kidney;
  const response = schema.safeParse(kidneys);
  if (!response.success) {
    res.status(411).json({
      msg: "invalid input",
    });
  } else {
    res.send({
      response,
    });
  }
});

app.get("/heart-checkup", (req, res) => {
  res.send("Your heart is good");
});

//global catches
app.use((err, req, res, next) => {
  res.json({
    msg: "Sorry there is some error",
  });
});
app.listen(3000);

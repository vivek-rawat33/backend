const users = [
  {
    name: "john",
    kidney: [
      {
        healthy: false,
      },
    ],
  },
];

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  const johnKidney = users[0].kidney;
  const numberOfKidneys = johnKidney.length;
  let numberOfHealthyKidneys = 0;
  for (let i = 0; i < johnKidney.length; i++) {
    if (johnKidney[i].healthy) {
      numberOfHealthyKidneys++;
    }
  }
  const unhealthyKidney = numberOfKidneys - numberOfHealthyKidneys;
  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    unhealthyKidney,
  });
});

app.use(express.json());

app.post("/", (req, res) => {
  const isHealthy = req.body.isHealthy;
  users[0].kidney.push({ healthy: isHealthy });
  res.json({
    msg: "Done!",
    kidneys: users[0].kidney,
  });
});

app.put("/", (req, res) => {
  if (!isAllKidneysAreHealthy()) {
    for (let i = 0; i < users.length; i++) {
      users[0].kidney[i].healthy = true;
    }
    res.json({
      msg: "All kidneys are now healthy!",
    });
  } else {
    res
      .status(411)
      .json({ msg: "All kidneys are already healthy no need to change !" });
  }
});

app.delete("/", (req, res) => {
  if (isThereAtleastOneUnhealthyKidney()) {
    const newKidney = [];
    for (let i = 0; i < users.length; i++) {
      if (users[0].kidney[i].healthy) {
        newKidney.push({
          healthy: true,
        });
      }
    }
    users[0].kidney = newKidney;
    res.json({ msg: "Done!" });
  } else {
    res.status(411).json({ msg: "No unhealthy kidneys found!" });
  }
});

function isThereAtleastOneUnhealthyKidney() {
  let atlestOneUnhealthy = false;
  for (let i = 0; i < users[0].kidney.length; i++) {
    if (!users[0].kidney[i].healthy) {
      atlestOneUnhealthy = true;
    }
  }
  return atlestOneUnhealthy;
}

function isAllKidneysAreHealthy() {
  let allKidneysAreHealthy = false;
  for (let i = 0; i < users.length; i++) {
    if (users[0].kidney[i].healthy) allKidneysAreHealthy = true;
    else {
      allKidneysAreHealthy = false;
    }
  }
  return allKidneysAreHealthy;
}
app.listen(port);

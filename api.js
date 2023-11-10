const express = require("express");
const app = express.Router();
const db = require("./db");
const funcs = require("./helpers");
const errHandler = (req, res, next) => {
  const ID = req.params.id;

  if (Number.isNaN(parseInt(ID))) {
    return res.status(400).send("ID parametresi yanlış girildi");
  }

  const isExist = funcs.findDiaryIndex(db.diaryData, ID);
  if (isExist == -1) {
    return res.status(204).send("no contentt");
  }
  next();
};
app.get("", (req, res) => {
  res.json({
    status: "ok",
    data: db.diaryData,
  });
});

app.post("", (req, res) => {
  const newDiary = db.addDiary(req);

  res.json({
    stat: "eklendi",
    data: newDiary,
  });
});

app.delete("/:id", errHandler, (req, res) => {
  db.deleteDiary(req);

  res.json({ data: db.diaryData });
});

app.patch("/:id", errHandler, (req, res) => {
  db.updateDiary(req);
  res.send();
});

module.exports = app;

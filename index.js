const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());

const db = require("./db");

app.get("/diary", (req, res) => {
  res.json({
    status: "ok",
    data: db.diaryData,
  });
});

app.post("/diary", (req, res) => {
  const newDiary = db.addDiary(req);

  res.json({
    stat: "eklendi",
    data: newDiary,
  });
});

app.delete("/diary/:id", (req, res) => {
  db.deleteDiary(req);
  res.json({ data: db.diaryData });
});

app.patch("/diary/:id", (req, res) => {
  db.updateDiary(req);
  res.send();
});

console.log("listening to 3000...");
app.listen(3000);

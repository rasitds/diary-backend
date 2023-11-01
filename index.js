const express = require("express");
const app = express();
const cors = require("cors")
app.use(cors())
app.use(express.json())


const currentDate = () => {
    const current = new Date()
    const date = current.getDate() + "." + (current.getMonth()+1) + "." + current.getFullYear()
    return date
}

const diaryData = [
    {
        id: Date.now(),
        diary: "Kampüs'te coworking",
        date: currentDate(),
        isFav: false
    }
]


app.get("/diary", (req, res) => {
  res.json({
    status: "ok",
    data: diaryData
  });
});

app.post("/diary", (req, res) => {
    console.log(req.body);
    const newDiary = {
        id: Date.now(),
        date: currentDate(),...req.body
    }
    diaryData.push(newDiary)
    res.json({
        stat: "eklendi"
    })
    
});

app.delete("/diary/:id", (req, res) => {
    const id = req.params.id
    
    const data = diaryData.filter(diary => {
        console.log(parseInt(diary.id) == parseInt(id))
        return parseInt(diary.id) !== parseInt(id)
    })
    
    res.json({data})
});

app.patch("/diary", (req, res) => {
  res.send("güncellendi");
});























console.log("listening to 3000...");
app.listen(3000);

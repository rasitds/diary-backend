const express = require("express");
const app = express();
const db = require("./db");
const cors = require("cors");
app.use(cors());
app.use(express.json());
const api = require("./api")

app.use("/diary", api,   (req,res,next)  => {console.log("use")//sadece /diary ile eşleşenler gelsin diyoruz buraya
    res.send("aradığınız sayfa bulunamadı...")
}   
)

console.log("listening to 3000...");
app.listen(3000);

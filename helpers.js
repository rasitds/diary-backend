const db = require("./db");


const currentDate = () => {
  const current = new Date();
  const date =
    current.getDate() +
    "." +
    (current.getMonth() + 1) +
    "." +
    current.getFullYear();
  return date;
};
const findDiaryIndex = (diaryData, id) =>{
  return diaryData.findIndex((diary) => {
    return parseInt(diary.id) === parseInt(id)
    
  })
}


module.exports = { currentDate, findDiaryIndex };

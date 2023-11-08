const funcs = require("./helpers");

const diaryData = [
  {
    id: Date.now(),
    content: "Kampüs'te coworking",
    date: funcs.currentDate(),
    isFav: false,
  },
];

const addDiary = (req) => {
  const newDiary = {
    id: Date.now(),
    date: funcs.currentDate(),
    ...req.body,
  };
  diaryData.push(newDiary);
  return newDiary;
};

const deleteDiary = (req) => {
  const id = req.params.id;
  const found = diaryData.findIndex((diary) => {
    return parseInt(diary.id) === parseInt(id);
  });
  diaryData.splice(found, 1);
};

const updateDiary = (req) => {
  const id = req.params.id;
  const newContent = req.body.diaryContent;
  const diaryIndex = diaryData.findIndex(
    (diary) => parseInt(diary.id) === parseInt(id)
  );
  diaryData[diaryIndex].content = newContent;
};

module.exports = { diaryData, addDiary, deleteDiary, updateDiary };

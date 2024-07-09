// 保護者の記録【3～4か月頃】
// 記入年月日、首が座った日、各問答項目、自由記述欄

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const P22Schema = new Schema({
  userId:{type:String,unique:true } ,
  recordYear: String,
  recordMonth: String,
  recordDay: String,
  neckSupportMonth: String,
  neckSupportDay: String,
  question1: String,
  question2: String,
  question3: String,
  question4: String,
  question5: String,
  question6: String,
  freeText: String
});

P22Schema.index({ userId: 1 }, { unique: true }); // ユーザーIDを主キーとして設定

const Page22Model = mongoose.model('ParentRecordThreeToFourMonths', P22Schema);

module.exports = {Page22Model,P22Schema} ;

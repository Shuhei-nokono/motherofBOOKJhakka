// 保護者の記録【１か月頃】
// 記入年月日、1か月記録年月日
// 各問答項目　これを6回繰り返す。
// 自由記述欄

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const P18Schema = new Schema({
  userId:{type:String,unique:true } ,
  recordYear: String,
  recordMonth: String,
  recordDay: String,
  oneMonthYear: String,
  oneMonthMonth: String,
  oneMonthDay: String,
  question1: String,
  question2: String,
  question3: String,
  question4: String,
  question5: String,
  question6: String,
  freeText: String
});

P18Schema.index({ userId: 1 }, { unique: true }); // ユーザーIDを主キーとして設定

const Page18Model = mongoose.model('ParentRecord1', P18Schema);

module.exports = Page18Model;

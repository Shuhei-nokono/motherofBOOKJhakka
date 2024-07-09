// 検査の記録
// 検査の記録、検査項目、検査年月日、備考　これを3回繰り返す。
// 予備欄

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const P17Schema = new Schema({
  userId:{type:String,unique:true } ,
  examinationItem: String,
  examinationYear: String,
  examinationMonth: String,
  examinationDay: String,
  remarks: String,
  examinationItem2: String,
  examinationYear2: String,
  examinationMonth2: String,
  examinationDay2: String,
  remarks2: String,
  examinationItem3: String,
  examinationYear3: String,
  examinationMonth3: String,
  examinationDay3: String,
  remarks3: String,
  extraField: String,
});

P17Schema.index({ userId: 1 }, { unique: true }); // ユーザーIDを主キーとして設定

const Page17Model = mongoose.model('ChildExaminationRecord', P17Schema);

module.exports = Page17Model;

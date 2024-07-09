// 検査記録
// 検査項目、検査年月日、備考　これを20回繰り返す。

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const examinationRecordSchema = new Schema({
  userId:{type:String,unique:true } ,
  testItem1: String,
  testDate1: Date,
  remarks1: String,
  testItem2: String,
  testDate2: Date,
  remarks2: String,
  testItem3: String,
  testDate3: Date
});

examinationRecordSchema.index({ userId: 1 }, { unique: true }); // ユーザーIDを主キーとして設定

const ExaminationRecord = mongoose.model('ExaminationRecord', examinationRecordSchema);

module.exports = ExaminationRecord;

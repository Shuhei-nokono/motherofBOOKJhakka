// 妊娠中の記録(妊娠7~8か月)
// 7か月目の期間、気持ち、8か月目の期間、気持ち 出産前後居住地、連絡先、緊急連絡先、分娩施設へのアクセス方法・時間、出産前後で家事等手伝える人

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pregnancyRecordSchema7_8 = new Schema({
  userId:{type:String,unique:true } ,
  startMonth7: String,
  startDay7: String,
  endMonth7: String,
  endDay7: String,
  feelings7: String,
  startMonth8: String,
  startDay8: String,
  endMonth8: String,
  endDay8: String,
  feelings8: String,
  address: String,
  contact: String,
  emergencyName1: String,
  emergencyContact1: String,
  emergencyName2: String,
  emergencyContact2: String,
  accessMethod: String,
  accessDetails: String,
  travelHours: String,
  travelMinutes: String,
  helper: String
});

pregnancyRecordSchema7_8.index({ userId: 1 }, { unique: true }); // ユーザーIDを主キーとして設定

const PregnancyRecord7_8 = mongoose.model('PregnancyRecord7_8', pregnancyRecordSchema7_8);

module.exports = PregnancyRecord7_8;

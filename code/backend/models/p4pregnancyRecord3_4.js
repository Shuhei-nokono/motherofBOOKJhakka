// 妊娠中の記録(妊娠3~4か月)
// 3か月目の期間、気持ち、4か月目の期間、気持ち 最終月経開始日、妊娠初診日、胎動を感じた日、分娩予定日


const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pregnancyRecordSchema3_4 = new Schema({
  userId:{type:String,unique:true } ,
  startMonth3: String,
  startDay3: String,
  endMonth3: String,
  endDay3: String,
  feeling3: String,
  startMonth4: String,
  startDay4: String,
  endMonth4: String,
  endDay4: String,
  feeling4: String,
  lastMenstrualYear: String,
  lastMenstrualMonth: String,
  lastMenstrualDay: String,
  firstExamYear: String,
  firstExamMonth: String,
  firstExamDay: String,
  quickeningYear: String,
  quickeningMonth: String,
  quickeningDay: String,
  expectedDeliveryYear: String,
  expectedDeliveryMonth: String,
  expectedDeliveryDay: String
});

pregnancyRecordSchema3_4.index({ userId: 1 }, { unique: true }); // ユーザーIDを主キーとして設定

const PregnancyRecord3_4 = mongoose.model('PregnancyRecord3_4', pregnancyRecordSchema3_4);

module.exports = PregnancyRecord3_4;

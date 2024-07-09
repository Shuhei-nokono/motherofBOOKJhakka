// 妊娠中の記録(妊娠5~6か月)
// 5か月目の期間、気持ち、6か月目の期間、気持ち

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pregnancyRecordSchema5_6 = new Schema({
  userId:{type:String,unique:true } ,
  startMonth5: String,
  startDay5: String,
  endMonth5: String,
  endDay5: String,
  feelings5: String,
  startMonth6: String,
  startDay6: String,
  endMonth6: String,
  endDay6: String,
  feelings6: String,
});

pregnancyRecordSchema5_6.index({ userId: 1 }, { unique: true }); // ユーザーIDを主キーとして設定

const PregnancyRecord5_6 = mongoose.model('PregnancyRecord5_6', pregnancyRecordSchema5_6);

module.exports = PregnancyRecord5_6;

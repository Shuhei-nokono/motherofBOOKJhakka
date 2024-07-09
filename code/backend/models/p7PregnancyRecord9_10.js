// 妊娠中の記録(妊娠9~10か月)
//  9か月目の期間、気持ち、10か月目の期間、気持ち、40週目の期間、気持ち、出産日、気持ち

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pregnancyRecordSchema9_10 = new Schema({
  userId:{type:String,unique:true } ,
  height: String,
  weight: String,
  marriageAge: String,
  BMI: String,
  disease: String,
  rubella: String,
  measles: String,
  chickenPox: String,
  surgeryExperience: String,
  medication: String,
  stress: String,
  pregnancyConcern: String,
  otherConcerns: String,
  smoking: String,
  cohabitantSmoking: String,
  alcohol: String,
  husbandHealth: String,
  previousBirthYear: String,
  previousBirthMonth: String,
  previousBirthYear2: String,
  previousBirthMonth2: String,
  pregnancyDeliveryStatus: String,
  birthWeight: String,
  birthGender: String,
  currentChildStatus: String
});

pregnancyRecordSchema9_10.index({ userId: 1 }, { unique: true }); // ユーザーIDを主キーとして設定

const PregnancyRecord9_10 = mongoose.model('PregnancyRecord9_10', pregnancyRecordSchema9_10);

module.exports = PregnancyRecord9_10;

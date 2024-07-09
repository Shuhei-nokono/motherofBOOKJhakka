// 妊娠中と産後の歯の状態
// 初回診査年月日、妊娠週、要治療の虫歯、歯石、歯肉炎症、特記事項、施設名および担当医。
// 各歯の状態記号、妊娠産後週、歯石、歯肉炎症、特記事項、診査年月日、施設名および担当者名　これをもう一回繰り返す。

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const dentalStatusSchema = new Schema({
  userId:{type:String,unique:true } ,
  healthCheckYear: String,
  healthCheckMonth: String,
  healthCheckDay: String,
  monthsAfterBirth: String,
  daysAfterBirth: String,
  weight: String,
  height: String,
  chestCircumference: String,
  headCircumference: String,
  nutritionState: String,
  nutritionMethod: String,
  healthStatus: String,
  remarks: String,
  facilityOrDoctor: String,
  measurementDate: String,
  ageInMonths: String,
  measuredWeight: String,
  measuredHeight: String,
  additionalRemarks: String,
  measuredFacilityOrDoctor: String
});

dentalStatusSchema.index({ userId: 1 }, { unique: true }); // ユーザーIDを主キーとして設定

const DentalStatus = mongoose.model('DentalStatus', dentalStatusSchema);

module.exports = DentalStatus;

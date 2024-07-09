// １か月児健康診査
//  健康診査実施年月日、出生後日、体重、身長、胸囲、頭囲、栄養状態、栄養法、健康状態、特記事項、施設名または担当者名、測定実施年月日、月齢、体重、身長、特記事項、施設名または担当者名

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const P21Schema = new Schema({
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

P21Schema.index({ userId: 1 }, { unique: true }); // ユーザーIDを主キーとして設定

const Page21Model = mongoose.model('OneMonthHealthCheck1', P22Schema);

module.exports = Page21Model;

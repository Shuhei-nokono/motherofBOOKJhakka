// ３～４か月児健康診査
// 健康診査実施年月日、出生後日、体重、身長、胸囲、頭囲、栄養状態、栄養法、股関節開排制限、健康状態、特記事項、施設名または担当者名、測定実施年月日、月齢、体重、身長、特記事項、施設名または担当者名

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const P23Schema = new Schema({
  userId:{type:String,unique:true } ,
  checkYear: String,
  checkMonth: String,
  checkDay: String,
  afterBirthMonth: String,
  afterBirthDay: String,
  weight: String,
  height: String,
  chestCircumference: String,
  headCircumference: String,
  nutritionStatus: String,
  feedingMethod: String,
  hipJointLimit: String,
  healthStatus: String,
  specialNotes: String,
  facilityName: String,
  measurementDate: String,
  ageInMonths: String,
  measuredWeight: String,
  measuredHeight: String,
  additionalNotes: String,
  responsibleFacility: String
});

P23Schema.index({ userId: 1 }, { unique: true }); // ユーザーIDを主キーとして設定

const Page23Model = mongoose.model('ThreeToFourMonthsHealthCheck', P23Schema);

module.exports = { Page23Model, P23Schema} ;

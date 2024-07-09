// 妊婦の健康状態
// 身長、体重、結婚年齢、BMI、疾病、感染症、手術経験の確認、常用薬、ストレス、妊娠への心配、他の心配、煙草の有無、同居者の煙草の有無、酒の有無、夫の健康状態、今までの出産年月、妊娠出産産後の状態、出生児の体重、出生時の性別、現在の子の状態

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const maternalHealthSchema = new Schema({
  userId:{type:String,unique:true } ,
  height: Number,
  weight: Number,
  marriageAge: Number,
  BMI: Number,
  disease: String,
  rubella: String,
  measles: String,
  chickenPox: String,
  surgeryExperience: Boolean,
  medication: String,
  stress: String,
  pregnancyConcern: String,
  otherConcerns: String,
  smoking: Boolean,
  cohabitantSmoking: Boolean,
  alcohol: Boolean,
  husbandHealth: String,
  previousBirthYear: String,
  previousBirthMonth: String,
  previousBirthYear2: String,
  previousBirthMonth2: String,
  pregnancyDeliveryStatus: String,
  birthWeight: Number,
  birthGender: String,
  currentChildStatus: String
});

maternalHealthSchema.index({ userId: 1 }, { unique: true }); // ユーザーIDを主キーとして設定

const MaternalHealth = mongoose.model('MaternalHealth', maternalHealthSchema);

module.exports = MaternalHealth;

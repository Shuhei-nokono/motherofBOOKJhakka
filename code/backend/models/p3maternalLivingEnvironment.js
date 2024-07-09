// 妊婦の生活環境
//  職業、仕事内容環境、仕事時間、通勤方法、通勤時間、混雑具合 妊娠後の対応、産前、産後休暇、育児休業、住居種類、騒音、日当たり、同居人数

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const maternalLivingEnvironmentSchema = new Schema({
  userId:{type:String,unique:true } ,
  occupation: String,
  jobEnvironment: String,
  workHours: String,
  commuteMethod: String,
  commuteTime: String,
  congestionLevel: String,
  postPregnancyActions: String,
  prenatalLeave: String,
  postnatalLeave: String,
  maternalLeave: String,
  paternalLeave: String,
  housingType: String,
  noiseLevel: String,
  sunlight: String,
  cohabitantCount: Number
});

maternalLivingEnvironmentSchema.index({ userId: 1 }, { unique: true }); // ユーザーIDを主キーとして設定

const MaternalLivingEnvironment = mongoose.model('MaternalLivingEnvironment', maternalLivingEnvironmentSchema);

module.exports = MaternalLivingEnvironment;

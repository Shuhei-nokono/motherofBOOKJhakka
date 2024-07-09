// 出産後の母体状態
// 産後日月数、子宮復古、悪露、乳房の状態、尿蛋白、尿糖、体重、備考、お乳を飲ませた最初の時間 与えたお乳の種類、マタニティブルー曝露、他に変わった点、入浴日、家事開始日、労働開始日、月経再開日、家族計画指導 

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const P15Schema = new Schema({
  userId:{type:String,unique:true } ,
  postpartumDays: String,
  uterineRecovery: String,
  lochia: String,
  breastCondition: String,
  urineProtein: String,
  urineSugar: String,
  weight: String,
  notes: String,
  firstNursingTime: String,
  milkType: String,
  maternityBlues: String,
  otherChanges: String,
  postpartumBathingDay: String,
  bathingMonth: String,
  bathingDay: String,
  houseworkStartDay: String,
  houseworkMonth: String,
  houseworkDay: String,
  workStartDay: String,
  workMonth: String,
  workDay: String,
  menstruationResumeYear: String,
  menstruationResumeMonth: String,
  menstruationResumeDay: String,
  familyPlanningGuidance: String,
  guidanceProvider: String,
  guidanceYear: String,
  guidanceMonth: String,
  guidanceDay: String
});

P15Schema.index({ userId: 1 }, { unique: true }); // ユーザーIDを主キーとして設定

const Page15Model = mongoose.model('PostpartumStatus', P15Schema);

module.exports = Page15Model;

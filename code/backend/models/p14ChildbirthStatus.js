// 出産の状態
// 妊娠期間、娩出日時、分娩経過、分娩方法、分娩所要時間、出血量、輸血の有無、子の性別、子の数、体重、身長、胸囲、頭囲、特別な所見・処置、証明、出産場所、分娩取扱者の医師名、分娩取扱者の助産師名、その他 

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const P14Schema = new Schema({
  pregnancyProgressWeek: String,
  pregnancyProgressDay: String,
  deliveryYear: String,
  deliveryMonth: String,
  deliveryDay: String,
  deliveryTime: String,
  deliveryHour: String,
  deliveryMinute: String,
  deliveryPosition: String,
  deliveryNotes: String,
  deliveryMethod: String,
  deliveryDuration: String,
  bloodLoss: String,
  excessiveBloodLoss: String,
  transfusion: String,
  childGender: String,
  childCount: String,
  weight: String,
  height: String,
  chestCircumference: String,
  headCircumference: String,
  specialObservations: String,
  certificates: String,
  deliveryPlace: String,
  physicianName: String,
  midwifeName: String,
  others: String,
});

P14Schema.index({ userId: 1 }, { unique: true }); // ユーザーIDを主キーとして設定

const Page14Model = mongoose.model('ChildbirthStatus', P14Schema);

module.exports = Page14Model;

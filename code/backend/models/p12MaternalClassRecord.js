
// 母親学級受講記録
// 受講年月日、課目、備考　これを3回繰り返す。
// 予備欄

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const maternalClassRecordSchema = new Schema({
  userId:{type:String,unique:true } ,
  year: String,
  month: String,
  day: String,
  subject: String,
  remarks: String,
  year2: String,
  month2: String,
  day2: String,
  subject2: String,
  remarks2: String,
  year3: String,
  month3: String,
  day3: String,
  subject3: String,
  remarks3: String,
  year4: String,
  month4: String,
  day4: String,
  subject4: String,
  remarks4: String,
  spareField: String
});

maternalClassRecordSchema.index({ userId: 1 }, { unique: true }); // ユーザーIDを主キーとして設定

const MaternalClassRecord = mongoose.model('MaternalClassRecord', maternalClassRecordSchema);

module.exports = MaternalClassRecord;

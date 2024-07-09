// 新生児期の経過
// 早期新生児期の日齢、早期新生児期の体重、早期新生児期の哺乳力、早期新生児期の黄疸、早期新生児期のその他、 早期新生児期のビタミンK2シロップ実施日、出生後異常、 退院日、体重、栄養法、観察事項、施設名、担当者名、連絡先、後期新生児期の日齢、体重、哺乳力、栄養法、施設名または担当者名、新生児訪問指導等の記録の年月日、日齢、体重、身長、胸囲、頭囲、栄養法、施設名または担当者名、特記事項

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const P16Schema = new Schema({
  userId:{type:String,unique:true } ,
  earlyNewbornDays: String,
  earlyNewbornWeight: String,
  earlyNewbornNursing: String,
  earlyNewbornJaundice: String,
  earlyNewbornOther: String,
  earlyNewbornVitaminK2: String,
  postnatalAbnormality: String,
  postnatalAbnormalityDetails: String,
  dischargeYear: String,
  dischargeMonth: String,
  dischargeDay: String,
  postnatalDays: String,
  postnatalWeight: String,
  feedingMethod: String,
  observations: String,
  facilityName: String,
  contactInfo: String,
  lateNewbornDays: String,
  lateNewbornWeight: String,
  lateNewbornNursing: String,
  lateNewbornFeedingMethod: String,
  lateNewbornFacilityName: String,
  newbornVisitYear: String,
  newbornVisitMonth: String,
  newbornVisitDay: String,
  visitDays: String,
  visitWeight: String,
  visitHeight: String,
  visitChestCircumference: String,
  visitHeadCircumference: String,
  visitFeedingMethod: String,
  visitFacilityName: String,
  visitRemarks: String
});

P16Schema.index({ userId: 1 }, { unique: true }); // ユーザーIDを主キーとして設定

const Page16Model = mongoose.model('NeonatalProgress', P16Schema);

module.exports = Page16Model;

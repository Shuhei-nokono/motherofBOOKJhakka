const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pregnancyProgressSchema = new Schema({
  userId:{type:String,unique:true } ,
  consultationMonth: String,
  consultationDay: String,
  pregnancyWeek: String,
  pregnancyDay: String,
  uterineFundusHeight: String,
  abdominalCircumference: String,
  weight: String,
  edema: String,
  urineProtein: String,
  urineSugar: String,
  otherTests: String,
  remarks: String,
  facilityOrDoctor: String, //5個作りたい
  consultationMonth2: String,
  consultationDay2: String,
  pregnancyWeek2: String,
  pregnancyDay2: String,
  uterineFundusHeight2: String,
  abdominalCircumference2: String,
  weight2: String,
  edema2: String,
  urineProtein2: String,
  urineSugar2: String,
  otherTests2: String,
  remarks2: String,
  facilityOrDoctor2: String, //5個作りたい
  consultationMonth3: String,
  consultationDay3: String,
  pregnancyWeek3: String,
  pregnancyDay3: String,
  uterineFundusHeight3: String,
  abdominalCircumference3: String,
  weight3: String,
  edema3: String,
  urineProtein3: String,
  urineSugar3: String,
  otherTests3: String,
  remarks3: String,
  facilityOrDoctor3: String, //5個作りたい
  consultationMonth4: String,
  consultationDay4: String,
  pregnancyWeek4: String,
  pregnancyDay4: String,
  uterineFundusHeight4: String,
  abdominalCircumference4: String,
  weight4: String,
  edema4: String,
  urineProtein4: String,
  urineSugar4: String,
  otherTests4: String,
  remarks4: String,
  facilityOrDoctor4: String, //5個作りたい
  consultationMonth5: String,
  consultationDay5: String,
  pregnancyWeek5: String,
  pregnancyDay5: String,
  uterineFundusHeight5: String,
  abdominalCircumference5: String,
  weight5: String,
  edema5: String,
  urineProtein5: String,
  urineSugar5: String,
  otherTests5: String,
  remarks5: String,
  facilityOrDoctor5: String 
});

pregnancyProgressSchema.index({ userId: 1 }, { unique: true }); // ユーザーIDを主キーとして設定

const PregnancyProgress = mongoose.model('PregnancyProgress', pregnancyProgressSchema);

module.exports = PregnancyProgress;

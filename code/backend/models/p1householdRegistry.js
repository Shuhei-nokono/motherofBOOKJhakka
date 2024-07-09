// 戸籍情報
//  母の氏名、母の生年月日、母の年齢、母の職業、父の氏名、父の生年月日、父の年齢、父の職業、他一名の氏名、他一名の生年月日、他一名の年齢、他一名の職業、居住地、電話番号、第二居住地、第二電話番号、子の氏名、子の性別、子の出生場所、子の生年月日、出生届証明年月日、市町村名、市町村長名、認印

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const householdRegistrySchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  motherName: String,
  motherBirthDate: Date,
  motherAge: Number,
  motherOccupation: String,
  fatherName: String,
  fatherBirthDate: Date,
  fatherAge: Number,
  fatherOccupation: String,
  otherName: String,
  otherBirthDate: Date,
  otherAge: Number,
  otherOccupation: String,
  residence: String,
  phoneNumber: String,
  secondResidence: String,
  secondPhoneNumber: String,
  childName: String,
  childGender: String,
  birthPlace: String,
  childBirthDate: Date,
  birthCertificateDate: Date,
  cityName: String,
  mayorName: String,
  sealImage: String
});

householdRegistrySchema.index({ userId: 1 }, { unique: true }); // ユーザーIDを主キーとして設定

const HouseholdRegistry = mongoose.model('HouseholdRegistry', householdRegistrySchema);

module.exports = HouseholdRegistry;
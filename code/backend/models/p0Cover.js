// 表紙
// 交付日、番号、保護者名、子供の名、生年月日、性別

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const coverSchema = new Schema({
  userId: {
    type: String,
    required: true
  },
  issueDate: {
    type: Date
  },
  number: {
    type: String
  },
  guardianName: {
    type: String
  },
  childName: {
    type: String
  },
  childOrder: {
    type: String
  },
  birthDate: {
    type: Date
  },
  gender: {
    type: String
  }
});

coverSchema.index({ userId: 1 }, { unique: true }); // ユーザーIDを主キーとして設定

const Cover = mongoose.model('Cover', coverSchema);

module.exports = Cover;

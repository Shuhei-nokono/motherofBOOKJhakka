const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reserveFieldSchema = new Schema({
  userId: String,
  reservedField: String
});

reserveFieldSchema.index({ userId: 1 }, { unique: true }); // ユーザーIDを主キーとして設定

const ReserveField = mongoose.model('ReserveField', reserveFieldSchema);

module.exports = ReserveField;
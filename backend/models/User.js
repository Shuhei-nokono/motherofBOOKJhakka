const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new mongoose.Schema({
  myNumber: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  birthDate: { type: Date, required: true },
  address: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  supportProfession: { type: String, required: false },
  role: { type: String, enum: ['parent', 'admin', 'supporter'], required: true },
  myNumberHash: { type: String, required: true },
  userId: { type: String, required: true, unique: true },
  // status: { type: String, enum: ['Pending', 'Approved'], default: 'Pending' }
  status: { type: String, enum: ['Pending', 'Approved'], default: 'Approved' }
});

UserSchema.pre('save', async function (next) {
  if (this.isModified('myNumber')) {
    this.myNumberHash = await bcrypt.hash(this.myNumber.slice(-4), 10);
  }
  next();
});

UserSchema.pre('save', async function (next) {
  if (this.isNew) {
    this.userId = Math.floor(10000000 + Math.random() * 90000000).toString();
  }
  next();
});

module.exports = mongoose.model('User', UserSchema);

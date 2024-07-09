const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const registerUser = async (userData) => {
  const user = new User(userData);
  await user.save();
  return user;
};

const loginUser = async (email, password) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error('User not found ');
  const isMatch = await bcrypt.compare(password, user.myNumberHash);
  if (!isMatch) throw new Error('Invalid credentials');
  const token = jwt.sign({ userId: user.userId, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
  return { user, token };
};

const findUserById = async (email) => {
  return await User.findOne({ email });
};

module.exports = {
  registerUser,
  loginUser,
  findUserById
};

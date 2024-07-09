const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const authService = require('../services/authService');

const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');

// // .envファイルのパスを指定
const envPath = path.resolve(__dirname, '.env');

// 環境変数を読み込む
dotenv.config({ path: envPath });

const generateUserId = () => {
  return Math.floor(10000000 + Math.random() * 90000000).toString();
};

const register = async (req, res) => {
  const {
    name,
    birthDate,
    address,
    phoneNumber,
    email,
    myNumber,
    role
  } = req.body;

  try {
    const userId = generateUserId();
    // const myNumberHash = await bcrypt.hash(myNumber.slice(-4), 10);
    const myNumberHash = myNumber.slice(-4);


    const newUser = new User({
      myNumber,
      name,
      birthDate,
      address,
      phoneNumber,
      email,
      role,
      userId,
      myNumberHash,
      // status: 'Pending' // 初期状態は承認待ち
      status: 'Approved' // 初期状態は承認
    });

    // await newUser.save();
     newUser.save();
    res.status(200).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  // const passwordHash = bcrypt.hash(password , 10);

  try {
    // const user = await User.findOne({ email });
    const { user,token }  = await authService.loginUser(email,password);
    // if (!user) {
    //   return res.status(404).json({ message: 'User not found' });
    // }

    // // const isMatch = await bcrypt.compare(password, user.myNumberHash);
    // const isMatch = bcrypt.compare(password, user.myNumberHash); 
    // if (!isMatch) {
    // // if(password !== user.myNumberHash){
    //   return res.status(400).json({ message: 'Invalid credentials' });
    // }

    // const token = jwt.sign({ userId: user.userId, role: user.role }, process.env.JWT_SECRET, {
    //   expiresIn: '1h'
    // });

    res.status(200).json({ user,token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// 承認処理
const approve = async (req, res) => {
  try {
    const { myNumber } = req.body;

    if (!myNumber) {
      return res.status(400).json({ message: 'MyNumber is required' });
    }

    // ユーザーをマイナンバーで検索
    const user = await User.findOne({ myNumber });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // ユーザーを承認
    user.isApproved = true;
    await user.save();

    return res.status(200).json({ message: 'User approved successfully' });
  } catch (error) {
    console.error('Error approving user:', error);
    return res.status(500).json({ message: 'Internal server error' });
  }
};

const getUserById = async (req, res) => {
  try {
    const { email } = req.body;
    const user = await authService.findUserById(email);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  register,
  login,
  getUserById,
  approve
};

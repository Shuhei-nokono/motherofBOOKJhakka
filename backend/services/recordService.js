// backend/services/recordService.js
const mongoose = require('mongoose');

// 各ページのモデルをインポート
const {Page22Model}= require('../models/p22ParentRecordThreeToFourMonths');
const {Page23Model}= require('../models/p23ThreeToFourMonthsHealthCheck');

// ...他のページのモデルもインポート

// 共通のCRUD操作関数


// レコードの作成
const createRecord = async (model, data) => {
  const record = new model(data);
  await record.save();
  return record;
};
// const createRecord = async (model, data, schema) => {
//     const formattedData = validateAndFormatData(data,schema);
//     const record = new model(formattedData);
//     await record.save();
//     return record;
  // };

// レコードの読み取り
// const getRecordById = async (model, id) => {
  // const record = await model.findById(id);
const getRecordById = async (model, userId) => {
  const record = await model.findOne({ userId });
  // if (!record) {
  //   throw new Error('Record not found');
  // }
  return record;
};

// レコードの更新
// const updateRecord = async (model, id, data) => {
//   const record = await model.findByIdAndUpdate(id, data, { new: true });
const updateRecord = async (model, userId, data) => {
  // const record = await model.findOneAndUpdate({userId}, data, { new: true });
  const record = await model.findOneAndUpdate({ userId }, data, { new: true });
  // if (!record) {
  //   throw new Error('Record not found');
  // }
  return record;
};

// レコードの削除
const deleteRecord = async (model, id) => {
  const record = await model.findByIdAndDelete(id);
  // if (!record) {
  //   throw new Error('Record not found');
  // }
  return record;
};

// ページごとの操作関数


const createPage22Record = (data) => createRecord(Page22Model, data);
const getPage22RecordById = (id) => getRecordById(Page22Model, id);
const updatePage22Record = (id, data) => updateRecord(Page22Model, id, data);
const deletePage22Record = (id) => deleteRecord(Page22Model, id);

const createPage23Record = (data) => createRecord(Page23Model, data);
const getPage23RecordById = (id) => getRecordById(Page23Model, id);
const updatePage23Record = (id, data) => updateRecord(Page23Model, id, data);
const deletePage23Record = (id) => deleteRecord(Page23Model, id);



module.exports = {
  createPage22Record,
  getPage22RecordById,
  updatePage22Record,
  deletePage22Record,
  createPage23Record,
  getPage23RecordById,
  updatePage23Record,
  deletePage23Record
  // ...他のページの関数もエクスポート
};

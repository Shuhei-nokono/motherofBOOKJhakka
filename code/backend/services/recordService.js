// backend/services/recordService.js
const mongoose = require('mongoose');

// 各ページのモデルをインポート
const Page0Model = require('../models/p0Cover'); // 他のページモデルも同様にインポート
const Page1Model = require('../models/p1householdRegistry');
const Page2Model = require('../models/p2maternalHealth');
const Page3Model = require('../models/p3maternalLivingEnvironment');
const Page4Model = require('../models/p4pregnancyRecord3_4');
const Page5Model = require('../models/p5pregnancyRecord5_6');
const Page6Model = require('../models/p6PregnancyRecord7_8');
const Page7Model = require('../models/p7PregnancyRecord9_10');
const Page8Model = require('../models/p8pregnancyProgress');
const Page10Model = require('../models/p10ExaminationRecord');
const Page11Model = require('../models/p11reserveField');
const Page12Model = require('../models/p12MaternalClassRecord');
const Page13Model = require('../models/p13DentalStatus');
const Page14Model = require('../models/p14ChildbirthStatus');
const Page15Model = require('../models/p15PostpartumStatus');
const Page16Model = require('../models/p16NeonatalProgress');
const Page17Model = require('../models/p17ChildExaminationRecord');
const Page18Model = require('../models/p18ParentRecord1');
const Page21Model = require('../models/p21OneMonthHealthCheck1');
const {Page22Model , P22Schema }= require('../models/p22ParentRecordThreeToFourMonths');
const {Page23Model , P23Schema }= require('../models/p23ThreeToFourMonthsHealthCheck');

// ...他のページのモデルもインポート

// 共通のCRUD操作関数

 // 利用するスキーマを基にバリデーションや整形を行う関数(対象データ、対象モデル、対象スキーマ)
 const validateAndFormatData = (data,schema) => {
  const Model = mongoose.model('TempModel', schema);
  const document = new Model(data);
  const error = document.validateSync();
  if (error) {
  throw new Error(error.message);
   }
  return document.toObject();
  };

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

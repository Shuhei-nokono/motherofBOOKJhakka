const express = require('express');
// const { createRecord, getRecords, updateRecord } = require('../controllers/recordController');
const recordController = require('../controllers/recordController');
const authenticate = require('../middleware/authMiddleware');
const router = express.Router();

// router.post('/', authenticate, createRecord);
// router.get('/:userId', authenticate, getRecords);
// router.put('/:recordId', authenticate, updateRecord);

// 記録の取得
router.post('/getrecord',  recordController.getRecords);
// router.post('/getrecordP0',  recordController.getPage0ById);
// router.post('/getrecordP1',  recordController.getPage1ById);
// router.post('/getrecordP2',  recordController.getPage2ById);
// router.post('/getrecordP3',  recordController.getPage3ById);
// router.post('/getrecordP4',  recordController.getPage4ById);
// router.post('/getrecordP5',  recordController.getPage5ById);
// router.post('/getrecordP6',  recordController.getPage6ById);
// router.post('/getrecordP7',  recordController.getPage7ById);
// router.post('/getrecordP8',  recordController.getPage8ById);
// router.post('/getrecordP10',  recordController.getPage10ById);
// router.post('/getrecordP11',  recordController.getPage11ById);
// router.post('/getrecordP12',  recordController.getPage12ById);
// router.post('/getrecordP13',  recordController.getPage13ById);
// router.post('/getrecordP14',  recordController.getPage14ById);
// router.post('/getrecordP15',  recordController.getPage15ById);
// router.post('/getrecordP16',  recordController.getPage16ById);
// router.post('/getrecordP17',  recordController.getPage17ById);
// router.post('/getrecordP18',  recordController.getPage18ById);
// router.post('/getrecordP21',  recordController.getPage21ById);
router.post('/getrecordP22',  recordController.getPage22ById);
router.post('/getrecordP23',  recordController.getPage23ById);

// 記録の作成
router.post('/crerecord',  recordController.createRecord);
// router.post('/crerecordP0',  recordController.createPage0);
// router.post('/crerecordP1',  recordController.createPage1);
// router.post('/crerecordP2',  recordController.createPage2);
// router.post('/crerecordP3',  recordController.createPage3);
// router.post('/crerecordP4',  recordController.createPage4);
// router.post('/crerecordP5',  recordController.createPage5);
// router.post('/crerecordP6',  recordController.createPage6);
// router.post('/crerecordP7',  recordController.createPage7);
// router.post('/crerecordP8',  recordController.createPage8);
// router.post('/crerecordP10',  recordController.createPage10);
// router.post('/crerecordP11',  recordController.createPage11);
// router.post('/crerecordP12',  recordController.createPage12);
// router.post('/crerecordP13',  recordController.createPage13);
// router.post('/crerecordP14',  recordController.createPage14);
// router.post('/crerecordP15',  recordController.createPage15);
// router.post('/crerecordP16',  recordController.createPage16);
// router.post('/crerecordP17',  recordController.createPage17);
// router.post('/crerecordP18',  recordController.createPage18);
// router.post('/crerecordP21',  recordController.createPage21);
router.post('/crerecordP22',  recordController.createPage22);
router.post('/crerecordP23',  recordController.createPage23);

// 記録の更新
router.put('/updrecord',  recordController.updateRecord);
// router.put('/updrecordP0',  recordController.updatePage0);
// router.put('/updrecordP1',  recordController.updatePage1);
// router.put('/updrecordP2',  recordController.updatePage2);
// router.put('/updrecordP3',  recordController.updatePage3);
// router.put('/updrecordP4',  recordController.updatePage4);
// router.put('/updrecordP5',  recordController.updatePage5);
// router.put('/updrecordP6',  recordController.updatePage6);
// router.put('/updrecordP7',  recordController.updatePage7);
// router.put('/updrecordP8',  recordController.updatePage8);
// router.put('/updrecordP10',  recordController.updatePage10);
// router.put('/updrecordP11',  recordController.updatePage11);
// router.put('/updrecordP12',  recordController.updatePage12);
// router.put('/updrecordP13',  recordController.updatePage13);
// router.put('/updrecordP14',  recordController.updatePage14);
// router.put('/updrecordP15',  recordController.updatePage15);
// router.put('/updrecordP16',  recordController.updatePage16);
// router.put('/updrecordP17',  recordController.updatePage17);
// router.put('/updrecordP18',  recordController.updatePage18);
// router.put('/updrecordP21',  recordController.updatePage21);
router.put('/updrecordP22',  recordController.updatePage22);
router.put('/updrecordP23',  recordController.updatePage23);

module.exports = router;

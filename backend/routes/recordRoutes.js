const express = require('express');
const recordController = require('../controllers/recordController');
const authenticate = require('../middleware/authMiddleware');
const router = express.Router();


// 記録の取得
router.post('/getrecord',  recordController.getRecords);
router.post('/getrecordP22',  recordController.getPage22ById);
router.post('/getrecordP23',  recordController.getPage23ById);

// 記録の作成
router.post('/crerecord',  recordController.createRecord);
router.post('/crerecordP22',  recordController.createPage22);
router.post('/crerecordP23',  recordController.createPage23);

// 記録の更新
router.put('/updrecord',  recordController.updateRecord);
router.put('/updrecordP22',  recordController.updatePage22);
router.put('/updrecordP23',  recordController.updatePage23);

module.exports = router;

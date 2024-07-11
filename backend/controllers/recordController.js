const recordService = require('../services/recordService');

const createRecord = async (req, res) => {
  try {
    const record = await recordService.createRecord(req.body);
    res.status(200).json(record);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getRecords = async (req, res) => {
  try {
    const records = await recordService.getRecordById(req.body.userId);
    res.status(200).json(records);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateRecord = async (req, res) => {
  try {
    const record = await recordService.updateRecord(req.body.userId, req.body);
    res.status(200).json(record);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteRecord = async (req, res) => {
  try {
    const record = await recordService.deleteRecord(req.body.userId, req.body);
    res.status(200).json(record);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


//Page22

const createPage22 = async (req, res) => {
  try {
    const record = await recordService.createPage22Record(req.body);
    res.status(200).json(record);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getPage22ById = async (req, res) => {
  try {
    const records = await recordService.getPage22RecordById(req.body.setterUserId);
    res.status(200).json(records);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updatePage22 = async (req, res) => {
  try {
    const record = await recordService.updatePage22Record(req.body.setterUserId, req.body.formData);
    res.status(200).json(record);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deletePage22 = async (req, res) => {
  try {
    const record = await recordService.deletePage22Record(req.body.userId, req.body);
    res.status(200).json(record);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//Page23

const createPage23 = async (req, res) => {
  try {
    const record = await recordService.createPage23Record(req.body);
    res.status(200).json(record);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getPage23ById = async (req, res) => {
  try {
    const records = await recordService.getPage23RecordById(req.body.setterUserId);
    res.status(200).json(records);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updatePage23 = async (req, res) => {
  try {
    const record = await recordService.updatePage23Record(req.body.setterUserId, req.body.formData);
    res.status(200).json(record);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deletePage23 = async (req, res) => {
  try {
    const record = await recordService.deletePage23Record(req.body.searchUserId, req.body);
    res.status(200).json(record);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createRecord,
  getRecords,
  updateRecord,
  deleteRecord,
  createPage22,
  getPage22ById,
  updatePage22,
  deletePage22,
  createPage23,
  getPage23ById,
  updatePage23,
  deletePage23
};

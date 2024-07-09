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
  // createPage0,
  // getPage0ById,
  // updatePage0,
  // deletePage0,
  // createPage1,
  // getPage1ById,
  // updatePage1,
  // deletePage1,
  // createPage2,
  // getPage2ById,
  // updatePage2,
  // deletePage2,
  // createPage3,
  // getPage3ById,
  // updatePage3,
  // deletePage3,
  // createPage4,
  // getPage4ById,
  // updatePage4,
  // deletePage4,
  // createPage5,
  // getPage5ById,
  // updatePage5,
  // deletePage5,
  // createPage6,
  // getPage6ById,
  // updatePage6,
  // deletePage6,
  // createPage7,
  // getPage7ById,
  // updatePage7,
  // deletePage7,
  // createPage8,
  // getPage8ById,
  // updatePage8,
  // deletePage8,
  // createPage10,
  // getPage10ById,
  // updatePage10,
  // deletePage10,
  // createPage11,
  // getPage11ById,
  // updatePage11,
  // deletePage11,
  // createPage12,
  // getPage12ById,
  // updatePage12,
  // deletePage12,
  // createPage13,
  // getPage13ById,
  // updatePage13,
  // deletePage13,
  // createPage14,
  // getPage14ById,
  // updatePage14,
  // deletePage14,
  // createPage15,
  // getPage15ById,
  // updatePage15,
  // deletePage15,
  // createPage16,
  // getPage16ById,
  // updatePage16,
  // deletePage16,
  // createPage17,
  // getPage17ById,
  // updatePage17,
  // deletePage17,
  // createPage18, 
  // getPage18ById,
  // updatePage18,
  // deletePage18,
  // createPage21,
  // getPage21ById,
  // updatePage21,
  // deletePage21,
  createPage22,
  getPage22ById,
  updatePage22,
  deletePage22,
  createPage23,
  getPage23ById,
  updatePage23,
  deletePage23
};

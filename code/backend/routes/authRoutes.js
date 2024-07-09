const express = require('express');
const { register, login ,getUserById } = require('../controllers/authController');
const router = express.Router();

router.post('/register', register);
router.post('/login', login);
router.post('/getUserById', getUserById);

router.get('/login', login);
router.get('/register', register);

module.exports = router;

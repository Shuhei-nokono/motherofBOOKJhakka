const express = require('express');
const { getUserById, approveUser } = require('../controllers/userController');
const authenticate = require('../middleware/authMiddleware');
const router = express.Router();

console.log({ getUserById, approveUser });

router.get('/:userId', (authenticate, getUserById));
router.put('/approve/:userId', (authenticate, approveUser));

module.exports = router;

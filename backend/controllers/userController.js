const userService = require('../services/userService');

const getUserById = async (req, res) => {
  try {
    const user = await userService.findUserById(req.params.userId);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const approveUser = async (req, res) => {
  try {
    const user = await userService.approveUser(req.params.userId);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getUserById,
  approveUser
};

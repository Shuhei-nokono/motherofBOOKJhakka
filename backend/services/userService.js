const User = require('../models/User');



const approveUser = async (userId) => {
  const user = await User.findOneAndUpdate({ userId }, { status: 'Approved' }, { new: true });
  return user;
};

module.exports = {
  approveUser
};

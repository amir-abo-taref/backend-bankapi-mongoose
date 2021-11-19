const bankModel = require("../models/bank.model");

const getAllUsers = async (req, res) => {
  const data = await bankModel.user.find({});
  return res.status(200).send(data);
};

const addNewUser = (req, res) => {
  const {
    userName,
    userEmail,
    userPassword,
    userCash,
    userCredit,
    userAcountId,
  } = req.body;

  const user = new userModel.book({
    userName: userName,
    userEmail: userEmail,
    userPassword: userPassword,
    userCash: userCash,
    userCredit: userCredit,
    userAcountId: userAcountId,
  });

  user.save((err, data) => {
    if (err) return res.status(404).send(err);
    return res.status(200).send(data);
  });
};

const deleteUser = (req, res) => {
  const { id } = req.params;
  bankModel.user.findByIdAndDelete(id, (err, data) => {
    if (err) return res.status(404).send(err);
    return res.status(200).send(data);
  });
};

const updateUser = (req, res) => {
  const { id } = req.params;
  const {
    userName,
    userEmail,
    userPassword,
    userCash,
    userCredit,
    userAcountId,
  } = req.body;
  bankModel.user.findByIdAndUpdate(
    id,
    {
      userName: userName,
      userEmail: userEmail,
      userPassword: userPassword,
      userCash: userCash,
      userCredit: userCredit,
      userAcountId: userAcountId,
    },
    { new: true },
    (err, data) => {
      if (err) return res.status(404).send(err);
      return res.status(200).send(data);
    }
  );
};

module.exports = {
  getAllUsers,
  addNewUser,
  deleteUser,
  updateUser,
};

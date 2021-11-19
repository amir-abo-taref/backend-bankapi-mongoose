const bankModel = require("../models/bank.model");


const getAllUsers = async (req, res) => {
  const data = await bankModel.user.find({});
  return res.status(200).send(data);
};


const addNewUser = (req, res) => {
  const {
    name,
    email,
    password,
    cash,
    credit,
    acountId,
  } = req.body;

  const user = new bankModel.user({
    name: name,
    email:email,
    password: password,
    cash: cash,
    credit: credit,
    acountId: acountId,
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
    name,
    email,
    password,
    cash,
    credit,
    acountId,
  } = req.body;
  bankModel.user.findByIdAndUpdate(
    id,
    {
      name: name,
      email: email,
      password: password,
      cash: cash,
      credit: credit,
      acountId: acountId,
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

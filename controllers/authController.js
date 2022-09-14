import User from '../modals/User.js';

const register = async (req, res, next) => {
  const user = await User.create(req.body);
  res.status(201).json({user});
}

const login = async (req, res) => {
  res.send("login user");
}

const updateUser = async (req, res) => {
  res.send("updateUser user");
}

export { register, login, updateUser }
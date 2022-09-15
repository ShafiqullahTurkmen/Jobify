import User from '../modals/User.js';
import { StatusCodes } from 'http-status-codes';

const register = async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!(name && email && password)) {
    throw new Error("please provide all value");
  }

  const user = await User.create({ name, email, password });
  res.status(StatusCodes.CREATED).json({user});
}

const login = async (req, res) => {
  res.send("login user");
}

const updateUser = async (req, res) => {
  res.send("updateUser user");
}

export { register, login, updateUser }
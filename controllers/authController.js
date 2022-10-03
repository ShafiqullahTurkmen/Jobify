import User from '../modals/User.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError } from '../errors/index.js';

const register = async (req, res, next) => {
  const { name, email, password } = req.body;

  if (!(name && email && password)) {
    throw new BadRequestError("please provide all value");
  }

  const emailAlreadyExists = await User.findOne({email});
  
  if (emailAlreadyExists) {
    throw new BadRequestError("Email already exists");
  }
  
  const user = await User.create({ name, email, password });
  const token = user.createJWT();
  res.status(StatusCodes.CREATED).json({
    user: {
      email: user.email,
      lastName: user.lastName,
      location: user.location,
      name: user.name
    }, 
    token
  });
}

const login = async (req, res) => {
  res.send("login user");
}

const updateUser = async (req, res) => {
  res.send("updateUser user");
}

export { register, login, updateUser }
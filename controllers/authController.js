import User from '../modals/User.js';
import { StatusCodes } from 'http-status-codes';
import { BadRequestError, NotFoundError, UnAuthenticatedError } from '../errors/index.js';

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
  const { email, password } = req.body;
  if (!(email && password)) {
    throw new BadRequestError("Please provide all values")
  }

  const user = await User.findOne({ email }).select("+password");

  if (!user) {
    throw new UnAuthenticatedError("Invalid Credentials");
  }

  console.log(user, "it worksssssssssss");

  const isPasswordCorrect = await user.comparePassword(password);

  if (!isPasswordCorrect) {
    throw new UnAuthenticatedError("Invalid Credentials");
  }
  const token = user.createJWT();
  user.password = undefined;
  res.status(StatusCodes.OK).json({ user, token, location: user.location})
}

const updateUser = async (req, res) => {
  res.send("updateUser user");
}

export { register, login, updateUser }
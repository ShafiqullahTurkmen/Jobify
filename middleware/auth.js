import jwt from 'jsonwebtoken';
import { UnAuthenticatedError } from '../errors/index.js';

const auth = async (req, res, next) => {
    const token = req.cookies.token;


  if (!token) {
    throw new UnAuthenticatedError("Authentication invalid");
  }
  
  try {
    const payload = jwt.verify(token, process.env.JWT_SECRET)
    const testUser = payload.userId === "64626dede418fe27c43d4424";
    req.user = { userId: payload.userId, testUser }
  } catch (error) {
    throw new UnAuthenticatedError("Authentication invalid");
  }
  next();
}

export default auth;
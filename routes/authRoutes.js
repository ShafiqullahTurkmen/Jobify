import express from 'express';
import { register, login, updateUser} from '../controllers/authController.js';
import authenticateUser from '../middleware/auth.js';
import testUser from '../middleware/testUser.js';
import rateLimit from 'express-rate-limit';

const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 10,
  message: "Too many requests from this IP address, please try again after 15 minutes"
})

const router = express.Router();

router.route("/register").post(apiLimiter, register);
router.route("/login").post(apiLimiter, login);
router.route("/updateUser").patch(authenticateUser, testUser, updateUser);

export default router;
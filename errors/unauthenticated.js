import { StatusCodes } from "http-status-codes";
import CustomAPIError from "./custom-api.js";

class UnAuthenticatedError extends CustomAPIError {
  constructor(message) {
    super(message);
    this.statusCode = StatusCodes.BAD_REQUEST;
  }
}

export default UnAuthenticatedError;
import { UnAuthenticatedError } from '../errors/index.js';

const checkPermissions = (requstUser, resourceUserId) => {
  console.log(requstUser);
  if (requstUser.userId === resourceUserId.toString()) return
  throw new UnAuthenticatedError('Not authorized to access to this route')
}

export default checkPermissions;
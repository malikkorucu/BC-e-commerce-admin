import { getUsersList } from '../../services/userService';
import { GET_USER_REQUEST } from './types';

export const actionGetUsers = body => ({
  type: GET_USER_REQUEST,
  api: getUsersList,
  body: { ...body },
});

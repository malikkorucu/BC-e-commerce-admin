import { GET_USER_ERROR, GET_USER_SUCCESS, GET_USER_REQUEST } from './types';

const initialState = {
  userList: [],
  error: false,
  isLoading: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_SUCCESS:
      return {
        userList: action.payload,
        isLoading: false,
        error: false,
      };
    case GET_USER_ERROR:
      return {
        userList: [],
        error: true,
        isLoading: false,
      };
    case GET_USER_REQUEST:
      return {
        error: false,
        isLoading: true,
      };
    default:
      return state;
  }
};

import {
  DECREMENT_COUNT,
  GET_USER_ERROR,
  GET_USER_SUCCESS,
  INCREMENT_COUNT,
  GET_USER_REQUEST,
} from './types';

const initialState = {
  isLoading: false,
};

export const commonReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER_REQUEST:
      console.log('loader çalıştı');
      return {
        error: false,
        isLoading: true,
      };
    default:
      return state;
  }
};

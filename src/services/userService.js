import axios from 'axios';

export const getUsersList = async () => {
  const res = await axios.get('https://reqres.in/api/users?page=1');
  return res;
};

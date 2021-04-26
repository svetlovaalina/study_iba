import { GET_RANDOM_PHONE } from '../actions/getRandomPhone';

export const getRandomPhone = value => {
  return {
    type: GET_RANDOM_PHONE,
    payload: value,
  };
};

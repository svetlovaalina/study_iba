import { SET_PHONE_LIST } from '../actions/setPhoneList';

export const setPhoneList = value => {
  return {
    type: SET_PHONE_LIST,
    payload: value,
  };
};

import { GET_PROFILE_DATA } from '../actions/getProfileData';

export const getProfileData = value => {
  return {
    type: GET_PROFILE_DATA,
    payload: value,
  };
};

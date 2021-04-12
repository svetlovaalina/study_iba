import { UPDATE_CURRENT_PAGE } from '../actions/updateCurrentPage';

export const updateCurrentPage = (value) => {
  return {
    type: UPDATE_CURRENT_PAGE,
    payload: value,
  };
};

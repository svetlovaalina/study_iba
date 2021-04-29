import { setPhoneList } from '../actionCreators/setPhoneList';

const getPhones = async (dispatch, phoneListStore, get, response) => {
  if (!phoneListStore.length) {
    const phones = await get('');
    if (response.ok) {
      dispatch(setPhoneList(phones));
      return phones;
    }
  }
};

export function fetchPhones(phoneListStore, get, response) {
  return dispatch => {
    return getPhones(dispatch, phoneListStore, get, response);
  };
}

// import useFetch from 'use-http';
import { setPhoneList } from '../actionCreators/setPhoneList';
import { phoneListSelector } from '../selectors/phoneListSelector';

// const phoneListStore = useSelector(phoneListSelector);

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
    //     return
    //       .then(json => {
    //         dispatch(setPhoneList(json.products));
    //         return json.products;
    //       })
    //       .catch(error => dispatch(fetchProductsFailure(error)));
  };
}

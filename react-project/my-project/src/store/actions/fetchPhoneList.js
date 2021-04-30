export function fetchPhones() {
  return dispatch => {
    dispatch(fetchPhonesBegin());
    return fetch('http://angular.github.io/angular-phonecat/step-14/app/phones/phones.json')
      .then(response => response.json())
      .then(res => {
        dispatch(fetchPhonesSuccess(res));
        return res;
      })
      .catch(error => dispatch(fetchPhonesFailure(error)));
  };
}

export const FETCH_PHONES_BEGIN = 'FETCH_PHONES_BEGIN';
export const FETCH_PHONES_SUCCESS = 'FETCH_PHONES_SUCCESS';
export const FETCH_PHONES_FAILURE = 'FETCH_PHONES_FAILURE';

export const fetchPhonesBegin = () => ({
  type: FETCH_PHONES_BEGIN,
});

export const fetchPhonesSuccess = phones => ({
  type: FETCH_PHONES_SUCCESS,
  payload: phones,
});

export const fetchPhonesFailure = error => ({
  type: FETCH_PHONES_FAILURE,
  payload: error,
});

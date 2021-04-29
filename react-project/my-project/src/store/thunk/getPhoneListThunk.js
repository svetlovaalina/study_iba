// import { setPhoneList } from '../actionCreators/setPhoneList';

// const getPhones = async (dispatch, phoneListStore, get, response) => {
//   if (!phoneListStore.length) {
//     const phones = await get('');
//     if (response.ok) {
//       dispatch(setPhoneList(phones));
//       return phones;
//     }
//   }
// };

// export function fetchPhones(phoneListStore, get, response) {
//   return dispatch => {
//     return fetch('http://angular.github.io/angular-phonecat/step-14/app/phones/phones.json')
//       .then(handleErrors)
//       .then(res => res.json())
//       .then(json => {
//         dispatch(fetchProductsSuccess(json.products));
//         return json.products;
//       })
//       .catch(error => dispatch(fetchProductsFailure(error)));
//   };
// }
// //     return getPhones(dispatch, phoneListStore, get, response);
// //   };
// // }

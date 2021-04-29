import { initialState } from '../initialState';
import { SET_PHONE_LIST } from '../actions/setPhoneList';
import { UPDATE_SORT_TYPE } from '../actions/updateSortType';
import { UPDATE_SEARCH_TEXT } from '../actions/updateSearchText';
import { ADD_TO_BASKET } from '../actions/actionAddPhoneToBasket';
import { GET_PROFILE_DATA } from '../actions/getProfileData';
import { GET_RANDOM_PHONE } from '../actions/getRandomPhone';
import { FETCH_PHONES_BEGIN } from '../actions/fetchPhoneList';
import { FETCH_PHONES_SUCCESS } from '../actions/fetchPhoneList';
import { FETCH_PHONES_FAILURE } from '../actions/fetchPhoneList';

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PHONES_BEGIN:
      // Mark the state as "loading" so we can show a spinner or something
      // Also, reset any errors. We're starting fresh.
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_PHONES_SUCCESS:
      // All done: set loading "false".
      // Also, replace the items with the ones from the server
      return {
        ...state,
        loading: false,
        phoneListStore: action.payload,
      };
    case FETCH_PHONES_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        // phoneListStore: [],
      };
    // case SET_PHONE_LIST:
    //   return {
    //     ...state,
    //     phoneListStore: action.payload,
    //   };
    case ADD_TO_BASKET:
      return {
        ...state,
        listPhoneBasket: [...state.listPhoneBasket, action.value_3],
      };
    case UPDATE_SORT_TYPE:
      return {
        ...state,
        sortTypeStore: action.payload,
      };
    case UPDATE_SEARCH_TEXT:
      return {
        ...state,
        searchTextStore: action.payload,
      };
    case GET_PROFILE_DATA:
      return {
        ...state,
        profileData: action.payload,
      };
    case GET_RANDOM_PHONE:
      return {
        ...state,
        randomPhone: action.payload,
      };
    default:
      return state;
  }
};

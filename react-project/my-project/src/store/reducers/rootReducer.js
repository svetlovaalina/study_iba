
import {initialState} from '../initialState'
import {GET_PHONE_LIST} from '../actions/getPhoneList'
import {UPDATE_SORT_TYPE} from '../actions/updateSortType'
import {UPDATE_SEARCH_TEXT} from '../actions/updateSearchText'
import {ADD_TO_BASKET} from "../actions/actionAddPhoneToBasket"


 export const reducer = (state = initialState, action) =>  {

    switch (action.type) {
        case GET_PHONE_LIST:
            return {
                ...state,
                phoneListStore: action.payload
            };
        case ADD_TO_BASKET:
            return {
                ...state,
                listPhoneBasket: [
                    ...state.listPhoneBasket,
                    action.value_3
                ]
            }
        case UPDATE_SORT_TYPE:
            return {
                ...state,
                sortTypeStore: action.payload
            }
            case UPDATE_SEARCH_TEXT:
            return {
                ...state,
                searchTextStore: action.payload
            }
        default:
            return state;
    }
}

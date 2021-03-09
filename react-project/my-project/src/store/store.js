import {createStore} from 'redux';
import initialState from './initialState';
import ACTION_1 from "./actions/action_1"
import ACTION_2 from "./actions/action_2"
import ADD_TO_BASKET from "./actions/actionAddPhoneToBasket"

const store = createStore(reducer, initialState);

function reducer(state, action) {

    switch (action.type) {
        case ACTION_1:
            return {value: action.value_1};
        case ACTION_2:
            return {value: action.value_2};
        case ADD_TO_BASKET:
            return {
                ...state,
                listPhoneBasket: [
                    ...state.listPhoneBasket,
                    action.value_3
                ]
            }

        default:
            return state;
    }
}

export default store;
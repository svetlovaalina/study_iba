import {ADD_TO_BASKET} from "../actions/actionAddPhoneToBasket"

export const actionAddPhoneToBasket= (phoneData) => {
    return { 
        type: ADD_TO_BASKET,
        value_3: phoneData
    };
}

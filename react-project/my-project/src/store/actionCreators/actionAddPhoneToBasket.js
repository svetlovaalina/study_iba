import ADD_TO_BASKET from "../actions/actionAddPhoneToBasket"

function actionAddPhoneToBasket(phoneData) {
    return { 
        type: ADD_TO_BASKET,
        value_3: phoneData
    };
}

export default actionAddPhoneToBasket;
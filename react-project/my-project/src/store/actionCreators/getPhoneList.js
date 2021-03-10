import GET_PHONE_LIST from "../actions/getPhoneList"

export const getPhoneList = (value) => {
    return {
        type: GET_PHONE_LIST, 
        payload: value
    }
}

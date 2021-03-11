import {UPDATE_SORT_TYPE} from "../actions/updateSortType"

export const updateSortType = (value) => {
    return {
        type: UPDATE_SORT_TYPE, 
        payload: value
    }
}

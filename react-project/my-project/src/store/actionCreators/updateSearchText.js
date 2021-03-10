import UPDATE_SEARCH_TEXT from "../actions/updateSearchText"

export const updateSearchText = (value) => {
    return {
        type: UPDATE_SEARCH_TEXT, 
        payload: value
    }
}

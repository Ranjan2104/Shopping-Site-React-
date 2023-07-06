const initialState = {
    data: []
}
const getProductData = (state = initialState, action) => {
    if(action.type === 'GET_DATA_FROM_API') {
        return {
            ...state,
            data: action.payload
        }
    }
    return state;
}

export default getProductData;
export const getData = (data) => {
    return {
        type: 'GET_DATA_FROM_API',
        payload: data
    }
}

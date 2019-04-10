const initialSate = {
    details: []
}

export const productReducer = (state = initialSate, { type, payload }) => {
    switch (type) {
        case GET_DATA:
            return {
                ...state,
                details: payload
            }
        default:
            return state
    }
}
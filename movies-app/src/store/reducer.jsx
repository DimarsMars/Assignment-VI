const initialState = {
    keyword : 'movie',
}

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_SEARCH_KEYWORD':
            return {
                ...state,
                keyword : action.payload,
            };

            default:
                return state;
    }
};

export default searchReducer;
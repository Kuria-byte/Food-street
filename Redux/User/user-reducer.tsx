const INITIAL_STATE = {
    currentUser: null
}

const userReducer = (state = INITIAL_STATE, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload
            };

        case 'LOG_OUT_USER':
            return {
                ...state,
                currentUser: null
            }

        default:
            return state;
    }

};

export default userReducer;
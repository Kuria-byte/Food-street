const INITIAL_STATE = {
    CurrentUser: {
        fName: "Ian Static"
    }
}

const userReducer = (state = INITIAL_STATE, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                CurrentUser: action.payload
            };

        case 'LOG_OUT_USER':
            return {
                ...state,
                CurrentUser: null
            }

        default:
            return state;
    }

};

export default userReducer;
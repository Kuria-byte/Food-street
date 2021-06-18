export interface UserState {
    CurrentUser: {
        fName: string;
        lName: string;
        email: string;
        phone: string;
        valueCity: string;
        ValueDis: string;
        subDivValue: string;
    }
}

const INITIAL_STATE = {
    CurrentUser: {
        fName: "Ian ",
        lName: "Static",
        email: "default@gmail.com",
        phone: "0792145540",
        valueCity: "1",
        ValueDis: "5",
        subDivValue: "28",
    }
}

const userReducer = (state: UserState = INITIAL_STATE, action: { type: any; payload: any; }) => {
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
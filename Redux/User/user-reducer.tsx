export interface UserState {
    CurrentUser: {
        UserID: string;
        UserName: string;
        UserEmail: string;
        UserPhone: string;
        UserPassword: string;
        CityID: string;
        DistrictID: string;
        SubDistrictID: string;
        UserPostalCode: string;
        UserAddress: string
        UserLatitude: string
        UserLongitude: string
        IsActive: boolean
    }
}

const INITIAL_STATE = {
    CurrentUser: {
        UserID: "510",
        UserName: "Ian Kuria",
        UserEmail: "125mwitumi21@gmail.com",
        UserPhone: "0792145540",
        UserPassword: "12345",
        CityID: "1",
        DistrictID: "5",
        SubDistrictID: "28",
        UserPostalCode: "",
        UserAddress: "F29-40 Karachi",
        UserLatitude: "",
        UserLongitude: "",
        IsActive: true
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
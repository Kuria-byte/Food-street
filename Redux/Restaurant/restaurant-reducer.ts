export interface RestaurantState {
    Restaurants: [
         {
            BusinessID: string;
            BusinessName: string;
            BusinessPhone: string;
            BusinessEmail: string;
            CityID: string;
            DistrictID: string;
            BusinesssPostalCode: string;
            SubDivisionID: string;
            BusinessAddress: string;
            BusinessFullAddress: string;
            BusinessDescription: string;
            BusinessLatitude: string;
            BusinessLongitude: string;
            BusinessCategoryID: string;
            BusinessLogo: string;
            BusinessClosingTime: string;
            BusinessOpeningTime: string;
            MinimumOrder: string;
            BusinessVisibleOnMainPage: string;
            BusinessStarRating: string;
            DeliveryPrice: string;
            lastLogin: string;
            IsActive: string;
            CurrentStatus: string;

        }
    ]
}

const INITIAL_STATE = {

    Restaurants: []
      
        // BusinessID: "461",
        // BusinessName: "Karachi Frozen Food",
        // BusinessPhone: "03172350076",
        // BusinessEmail: "kff@gmail.com",
        // CityID: "1",
        // DistrictID: "5",
        // BusinesssPostalCode: "0",
        // SubDivisionID: "28",
        // BusinessAddress: "No Address",
        // BusinessFullAddress: "N/A",
        // BusinessDescription: "Welcome to Karachi Frozen Food Our food is very tasty and delicious and full of protein. We hope you enjoy our meal Note: If you place an order, your order will be delivered to you within two days",
        // BusinessLatitude: "0",
        // BusinessLongitude: "0",
        // BusinessCategoryID: "1",
        // BusinessLogo: "KarachiFrozenFood-Logo.jpeg",
        // BusinessClosingTime: "10:00PM",
        // BusinessOpeningTime: "3:00PM",
        // MinimumOrder: "500",
        // BusinessVisibleOnMainPage: "true",
        // BusinessStarRating: "5",
        // DeliveryPrice: "120",
        // lastLogin: "00001-01-01T0000",
        // IsActive: "true",
        // CurrentStatus: "Closed"


}

const userReducer = (state = INITIAL_STATE, action: { type: any; payload: any; }) => {
    switch (action.type) {
        case 'SET_RESTAURANTS':
            return {
                ...state,
                Restaurants: action.payload
            };

    
        default:
            return state;
    }

};

export default userReducer;
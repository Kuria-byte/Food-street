/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  OnBoarding: undefined;
  MyProfileEdit:undefined;
  RestaurantMenu: undefined;
  SignUp: undefined;
  SignIn: undefined;

};

export type BottomTabParamList = {
  Restaurants: undefined;
  User: undefined;
  Cart: undefined;
  Orders:undefined
  MyProfileEdit:undefined
 
};

export type RestaurantScreenParamList = {
  RestaurantList: undefined;
};

export type UserProfileScreenParamList = {
  UserProfile: undefined;
};


export type OrdersHistoryScreenParama = {
  Orders: undefined;
};

export type MyProfileEditScreenParamList = {
  MyProfileEdit: undefined;
};

export type CartScreenParamList = {
  Cart: undefined;
};

export type OnBoardingParamList = {
  OnBoarding: undefined;
};

export type SignUpParamList = {
  SignUp: undefined;
};
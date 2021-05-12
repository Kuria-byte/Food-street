/**
 * Learn more about using TypeScript with React Navigation:
 * https://reactnavigation.org/docs/typescript/
 */

export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
  MyProfileEdit:undefined;
  RestaurantMenu: undefined

};

export type BottomTabParamList = {
  Restaurants: undefined;
  User: undefined;
  Cart: undefined;
  MyProfileEdit:undefined
 
};

export type RestaurantScreenParamList = {
  RestaurantList: undefined;
};

export type UserProfileScreenParamList = {
  UserProfile: undefined;
};

export type MyProfileEditScreenParamList = {
  MyProfileEdit: undefined;
};

export type CartScreenParamList = {
  Cart: undefined;
};
import { combineReducers, Reducer } from "redux";
// import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import AsyncStorage from "@react-native-community/async-storage";
// Reducers
import userReducer from './User/user-reducer';
import { State } from "./root-reducer.types";
import restaurantReducer from "./Restaurant/restaurant-reducer";
// import cartReducer from './cart/cart.reducer'

// Firebase is persisting the user, so we don't need to persist it in our config
export const persistConfig ={
    key:'root',
    storage: AsyncStorage,
    whitelist : ['CurrentUser','Restaurants']
}
const rootReducer = combineReducers ({
    CurrentUser : userReducer,
    Restaurants: restaurantReducer
});


export default rootReducer
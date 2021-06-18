import { combineReducers } from "redux";
// import { persistReducer } from 'redux-persist'
// import storage from 'redux-persist/lib/storage'
// Reducers
import userReducer from './User/user-reducer';
// import cartReducer from './cart/cart.reducer'

// Firebase is persisting the user, so we don't need to persist it in our config
// const persistConfig ={
//     key:'root',
//     storage,
//     whitelist : ['cart']
// }
const rootReducer = combineReducers ({
    CurrentUser : userReducer,
});

export default rootReducer;
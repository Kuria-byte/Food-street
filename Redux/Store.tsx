import { createStore, applyMiddleware } from 'redux';
// import { configureStore } from '@reduxjs/toolkit'
import { persistReducer, persistStore  } from 'redux-persist'
import logger from 'redux-logger';
import rootReducer, { persistConfig } from './RootReducer';

// 

const middlewares = [];


if( process.env.NODE_ENV === 'development'){
middlewares.push(logger)
}


export const store = createStore(rootReducer, applyMiddleware(...middlewares));


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// const persistedReducer = persistReducer<RootState>(persistConfig, rootReducer);


// export const persitor = persistStore(store);


// import {
//     EmptyObject,
//     applyMiddleware,
//     createStore,
//     Middleware,
//     Reducer,
//   } from 'redux'
// //   import createSagaMiddleware from 'redux-saga'
//   import { persistStore, persistReducer } from 'redux-persist'
//   import { PersistPartial } from 'redux-persist/lib/persistReducer'
//   import { UserState } from './User/user-reducer'
//   import rootReducer from './RootReducer'
// import storage from 'redux-persist/es/storage'
// import logger from 'redux-logger'
// import { State } from './root-reducer.types'
// //   import rootSaga from './modules/rootSaga'
  
//   export interface StoreState {
//     state: State // the type of your reducer
//   }
  
//   const create = (
//     reducers: Reducer<EmptyObject & StoreState & PersistPartial>,
//     middlewares: Middleware[],
//   ) => {
//     middlewares.push(logger)
//     const enhancer = applyMiddleware(...middlewares)
//     return createStore(reducers, enhancer)
//   }
  
//   const persistConfig = {
//     key: 'root',
//     storage,
//   }
  

// const middlewares = [];
// if( process.env.NODE_ENV === 'development'){
// middlewares.push(logger)
// }
//   const persistedReducer = persistReducer(persistConfig, rootReducer)
//   // here is the trick instead of createStore I use my modified create function
//   const store = create(persistedReducer, middlewares)
  

  
//   export const persistor = persistStore(store)
//   export default store
  
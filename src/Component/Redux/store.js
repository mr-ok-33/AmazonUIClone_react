// import {combineReducers } from 'redux';
// import { configureStore } from '@reduxjs/toolkit';
// import cartReducer from './Reducers/reducers';

// const rootReducer = combineReducers({
//  cart :cartReducer
// })

// const store = configureStore(rootReducer);
// export default store;

import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './Reducers/reducers';

const store = configureStore({
  reducer: {
    cart: cartReducer
  }
});

export default store;

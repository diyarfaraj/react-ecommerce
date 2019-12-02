import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import userReducer from './user/user.reducer';

import cartReducer from './cart/cart.reducer';

//set up for what to inlcude in localStorage
const persistConfig = {
	key: 'root',
	storage,
	whitelist: [ 'cart' ]
};

const rootReducer = combineReducers({
	user: userReducer,
	cart: cartReducer
});

//Show some kind of value to display

export default persistReducer(persistConfig, rootReducer);

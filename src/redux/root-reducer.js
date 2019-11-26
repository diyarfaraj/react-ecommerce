import { combineReducers } from 'redux';

import userReducer from './user/user.reducer';

import cartReducer from './cart/cart.reducer';

//Show some kind of value to display

export default combineReducers({
	user: userReducer,
	cart: cartReducer
});

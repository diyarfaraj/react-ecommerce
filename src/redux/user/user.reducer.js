import UserActionsTypes from './user.types';

const INITIAL_STATE = {
	currentUser: null,
	error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UserActionsTypes.SIGNIN_SUCCESS:
			return {
				...state,
				currentUser: action.payload,
				error: null
			};

		case UserActionsTypes.SIGN_OUT_SUCCESS:
			return {
				...state,
				currentUser: null,
				error: null
			};

		case UserActionsTypes.SIGNIN_FAILURE:
		case UserActionsTypes.SIGN_OUT_FAILURE:
		case UserActionsTypes.SIGN_UP_FAULURE:
			return {
				...state,
				error: action.payload
			};

		default:
			return state;
	}
};

export default userReducer;

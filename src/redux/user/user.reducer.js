import UserActionsTypes from './user.types';

const INITIAL_STATE = {
	currentUser: null,
	error: null
};

const userReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case UserActionsTypes.GOOGLE_SIGNIN_SUCCESS:
		case UserActionsTypes.EMAIL_SIGNIN_SUCCESS:
			return {
				...state,
				currentUser: action.payload,
				error: null
			};

		case UserActionsTypes.GOOGLE_SIGNIN_FAILURE:
		case UserActionsTypes.EMAIL_SIGNIN_FAILURE:
			return {
				...state,
				error: action.payload
			};

		default:
			return state;
	}
};

export default userReducer;

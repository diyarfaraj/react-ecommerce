import UserActionsTypes from './user.types';

// function that returns objects
// each object is in the correct format that the actions needs to be

//here we hold the user thats created from the userAUth

export const setCurrentUser = (user) => ({
	type: UserActionsTypes.SET_CURRENT_USER,
	payload: user
});

export const googleSignInStart = () => ({
	type: UserActionsTypes.GOOGLE_SIGNIN_START
});

export const googleSignInSuccess = (user) => ({
	type: UserActionsTypes.GOOGLE_SIGNIN_SUCCESS,
	payload: user
});

export const googleSignInFailure = (error) => ({
	type: UserActionsTypes.GOOGLE_SIGNIN_FAILURE,
	payload: error
});

export const emailSignInStart = (emailAndPassword) => ({
	type: UserActionsTypes.EMAIL_SIGNIN_START,
	payload: emailAndPassword
});

export const emailSignInSuccess = (user) => ({
	type: UserActionsTypes.EMAIL_SIGNIN_SUCCESS,
	payload: user
});

export const emailSignInFailure = (error) => ({
	type: UserActionsTypes.EMAIL_SIGNIN_FAILURE,
	payload: error
});

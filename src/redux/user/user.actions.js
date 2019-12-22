import UserActionsTypes from './user.types';

// function that returns objects
// each object is in the correct format that the actions needs to be

//here we hold the user thats created from the userAUth

export const googleSignInStart = () => ({
	type: UserActionsTypes.GOOGLE_SIGNIN_START
});

export const signInSuccess = (user) => ({
	type: UserActionsTypes.SIGNIN_SUCCESS,
	payload: user
});

export const signInFailure = (error) => ({
	type: UserActionsTypes.SIGNIN_FAILURE,
	payload: error
});

export const emailSignInStart = (emailAndPassword) => ({
	type: UserActionsTypes.EMAIL_SIGNIN_START,
	payload: emailAndPassword
});

export const checkUserSession = () => ({
	type: UserActionsTypes.CHECK_USER_SESSION
});

export const signOutStart = () => ({
	type: UserActionsTypes.SIGN_OUT_START
});

export const signOutSuccess = () => ({
	type: UserActionsTypes.SIGN_OUT_SUCCESS
});

export const signOutFailure = (error) => ({
	type: UserActionsTypes.SIGN_OUT_FAILURE,
	payload: error
});

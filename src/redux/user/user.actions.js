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

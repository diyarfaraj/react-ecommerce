import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
	apiKey: 'AIzaSyD5UeJ2AbzGgniDBT4cKv4LHUGscktQnsg',
	authDomain: 'react-ecommerce-34e61.firebaseapp.com',
	databaseURL: 'https://react-ecommerce-34e61.firebaseio.com',
	projectId: 'react-ecommerce-34e61',
	storageBucket: 'react-ecommerce-34e61.appspot.com',
	messagingSenderId: '638938449847',
	appId: '1:638938449847:web:1a3b921aed1db26fd18a32',
	measurementId: 'G-2PCT8HJPGZ'
};

firebase.initializeApp(config);

//get the specific librarues of our need
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
//Ask the user to choose google account in the sign in process, with a pop up
provider.setCustomParameters({ propmt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
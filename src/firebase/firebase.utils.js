import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import './firebase.utils';

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

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;

	const userRef = firestore.doc(`users/${userAuth.uid}`);
	/* const collectionRef = firestore.collection('users'); */

	const snapShot = await userRef.get();
	/* const collectionSnapshot = await collectionRef.get();

	console.log({ collection: collectionSnapshot.docs.map((doc) => doc.data()) }); */

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData
			});
		} catch (error) {
			console.log('Error creäting a user: ', error.message);
		}
	}

	return userRef;
};

//instead of manually adding collection items into firebase, use this function and a bit more code in app.js
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
	const collectionRef = firestore.collection(collectionKey);
	console.log(collectionRef);

	const batch = firestore.batch();
	objectsToAdd.forEach((obj) => {
		const newDocRef = collectionRef.doc();

		batch.set(newDocRef, obj);
	});

	return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
	const transformedCollections = collections.docs.map((doc) => {
		const { title, items } = doc.data();

		return {
			routeName: encodeURI(title.toLowerCase()),
			id: doc.id,
			title,
			items
		};
	});

	console.log(transformedCollections);
};

//get the specific librarues of our need
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
//Ask the user to choose google account in the sign in process, with a pop up
provider.setCustomParameters({ propmt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

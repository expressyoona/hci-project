import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const config = {
    "apiKey": "AIzaSyAaZokFeFBqc86sbM5wCUT4Ct0JKk1Vdeg",
    "authDomain": "order-food-app-cee47.firebaseapp.com",
    "databaseURL": "https://order-food-app-cee47.firebaseio.com",
    "storageBucket": "gs://order-food-app-cee47.appspot.com",
    "serviceAccount": "order-food-app-cee47-firebase-adminsdk-zob4m-7206529176.json",
    "appId": "order-food-app-cee47"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();
const facebookProvider = new firebase.auth.FacebookAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = (successCallback, failedCallback) => auth.signInWithPopup(provider).then(successCallback).catch(failedCallback);

export const signInWithFacebook = (successCallback, failedCallback) => auth.signInWithPopup(facebookProvider).then(successCallback).catch(failedCallback);

export const signOut = (successCallback, failedCallback) => firebase.auth().signOut().then(successCallback).catch(failedCallback);

export default firebase;
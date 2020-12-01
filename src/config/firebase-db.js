import firebase from "firebase";
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

export default firebase
//.database();
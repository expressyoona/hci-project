import firebase from "config/firebase-db";

const db = firebase.database().ref('/user');

const getAll = () => {
    return db;
}

const create = data => {
    return firebase.auth().createUserWithEmailAndPassword(data);
}

const login = data => {
    return firebase.auth().signInWithEmailAndPassword(data);
}

const UserService = {
    getAll,
    create,
    login
};

export default UserService;
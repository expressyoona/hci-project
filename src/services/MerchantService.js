import firebase from "config/firebase-db";

const db = firebase.database().ref('/restaurant');

const getAll = () => {
    return db;
}

const getByStatus = (status) => {
    return db.orderByChild('status').equalTo(status);
}

const create = data => {
    return db.push({
        ...data,
        status: 'pending',
        registedAt: firebase.database.ServerValue.TIMESTAMP
    });
}

const update = (key, data) => {
    return db.child(key).update(data);
}

const remove = key => {
    return db.child(key).remove();
}

const removeAll = () => {
    return db.remove();
}

const MerchantService = {
    getAll,
    getByStatus,
    create,
    update,
    remove,
    removeAll
};

export default MerchantService;
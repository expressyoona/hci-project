import slugify from "slugify";

import firebase from "config/firebase-db";

const db = firebase.database().ref('/restaurant');

const characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
const charactersLength = characters.length;

const getAll = () => {
    return db;
}

const getByStatus = (status) => {
    return db.orderByChild('status').equalTo(status);
}

const create = data => {

    let randomText = '';
    for ( var i = 0; i < 6; i++ ) {
        randomText += characters.charAt(Math.floor(Math.random() * charactersLength));
     }

    return db.push({
        ...data,
        slug: slugify(data.restaurantName).toLowerCase() + '-' + randomText,
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
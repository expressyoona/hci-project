import firebase from "config/firebase-db";

// const db = firebase.database().ref('/restaurant/xcvxcvxcv/menu/type/xcjvhxciv');
const db = firebase.database().ref('/restaurant');

const getAll = () => {
    return db.orderByChild('status').equalTo('pending');
}

const create = data => {
    return db.push(data);
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

const RestaurantService = {
    getAll,
    create,
    update,
    remove,
    removeAll
};

export default RestaurantService;
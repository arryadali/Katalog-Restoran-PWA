import { openDB } from "idb";
import CONFIG from "../globals/config";

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const dbPromise = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(database) {
    database.createObjectStore(OBJECT_STORE_NAME, { keyPath: "id" });
  },
});

const FavoriteRestaurant = {
  getRestaurant(id) {
    return dbPromise.then((db) => db.get(OBJECT_STORE_NAME, id));
  },
  getAllRestaurants() {
    return dbPromise.then((db) => db.getAll(OBJECT_STORE_NAME))
      .then((restaurants) => restaurants.slice(0, 4));
  },
  putRestaurant(restaurant) {
    return dbPromise.then((db) => db.put(OBJECT_STORE_NAME, restaurant));
  },
  deleteRestaurant(id) {
    return dbPromise.then((db) => db.delete(OBJECT_STORE_NAME, id));
  },
};

export default FavoriteRestaurant;

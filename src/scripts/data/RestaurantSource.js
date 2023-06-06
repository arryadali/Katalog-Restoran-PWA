import API_ENDPOINT from "../globals/api-endpoint";

class RestaurantSource {
  static getAllRestaurants() {
    return fetch(API_ENDPOINT.HOME)
      .then((response) => response.json())
      .then((responseJson) => responseJson.restaurants.slice(0))
      .catch((error) => {
        throw new Error(error.message);
      });
  }

  static getDetailRestaurant(id) {
    return fetch(API_ENDPOINT.DETAIL(id))
      .then((response) => response.json())
      .then((responseJson) => responseJson.restaurant)
      .catch((error) => {
        throw new Error(error.message);
      });
  }

  static getListFood() {
    return fetch(API_ENDPOINT.MEAL)
      .then((response) => response.json())
      .then((responseJson) => responseJson.meals.slice(0))
      .catch((error) => {
        throw new Error(error.message);
      });
  }

  static addReview(data) {
    return fetch(API_ENDPOINT.ADD_REVIEW, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .catch((error) => {
        throw new Error(error.message);
      });
  }
}

export default RestaurantSource;

import RestaurantSource from "../../data/RestaurantSource";
import {
  createRestoItemTemplate, createMealItemTemplate, loader, failedLoad,
} from "../templates/template-creator";

const Home = {
  async render() {
    return `
    <jumbotron-section></jumbotron-section>
    <div class="loading"></div>
    <h2 class="title" id="title">Find the Fantastic Restauran!</h2>
    <restaurants-section></restaurants-section>
    <food-section></food-section>
    `;
  },

  afterRender() {
    const load = document.querySelector(".loading");
    load.innerHTML = loader();

    RestaurantSource.getAllRestaurants()
      .then((restaurants) => {
        const restoContainer = document.querySelector("#restaurants");
        restaurants.slice(0).forEach((restaurant) => {
          restoContainer.innerHTML += createRestoItemTemplate(restaurant);
        });
        return RestaurantSource.getListFood();
      })
      .then((meals) => {
        const mealContainer = document.querySelector(".food");
        meals.slice(0).forEach((meal) => {
          mealContainer.innerHTML += createMealItemTemplate(meal);
        });
        load.style.display = "none";
      })
      .catch((error) => {
        load.innerHTML = failedLoad();
        console.log(error);
      });
  },
};

export default Home;

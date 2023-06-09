import CONFIG from "../../globals/config";

const createRestoDetailTemplate = (restaurant) => `
<img src="${CONFIG.BASE_IMAGE_URL + restaurant.pictureId}" alt="${restaurant.name}" class="resto-img">
  <div class="detail-body">
    <div class="favorite" tabindex="0">
      <h1><div id="likeButtonContainer"></div> ${restaurant.name}</h1>
    </div>
    <div class="categories">
    ${restaurant.categories.map((category) => `<p class="category" tabindex="0">${category.name}</p>`).join("")}
      <p class="rate" tabindex="0"><img src="./icons/star.png" alt="star" class="star"> ${restaurant.rating}</p>
    </div>
    <p class="alamat" tabindex="0">${restaurant.address}, ${restaurant.city}</p>
    <p class="resto-deskripsi" tabindex="0">${restaurant.description}</p>
    <h2 class="judul" tabindex="0">Menu</h2>
    <div class="menu-resto" tabindex="0">
    <table>
      <tr>
        <th>Food</th>
      </tr>
      <tr class="list">
      ${restaurant.menus.foods.map((food) => `<td>${food.name}</td>`).join("")}
      </tr>
    </table>
    <table>
      <tr>
        <th>Drink</th>
      </tr>
      <tr class="list">
      ${restaurant.menus.drinks.map((drink) => `<td>${drink.name}</td>`).join("")}
      </tr>
    </table>
    </div>
    <h2 class="judul" tabindex="0">Customer Review</h2>
    <div id="review" tabindex="0"></div>
  </div>
    `;

const createRestoItemTemplate = (restaurants) => `
  <div class="card" tabindex="0">
  <img src="${CONFIG.BASE_IMAGE_URL + restaurants.pictureId}" alt="${restaurants.name}" class="card-img">
  <h3 class="card-title">${restaurants.name}</h3>
  <div class="info">
    <p class="rating"><img src="/icons/star.png" alt="location" class="star"/>${restaurants.rating}</p>
    <p class="lokasi"><img src="/icons/pin.png" alt="location" class="star"/>${restaurants.city}</p>
  </div>
  <p class="deskripsi">${restaurants.description}</p>
  <a href="${`/#/detail/${restaurants.id}`}" class="btn btn-detail btn-primary">Detail</a>
  </div>
  `;

const createReviewTemplate = (data) => {
  let reviewElement = "";
  data.forEach((review) => {
    reviewElement += `
    <div class="review-container">
      <div class="review-head">
        <p>${review.name}, ${review.date}</p>
      </div>
      <p class="review-body">${review.review}</p>
    </div>`;
  });
  return reviewElement;
};

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

const createMealItemTemplate = (meal) => `
  <div class="card" tabindex="0">
    <img src="${meal.strMealThumb}" alt="${meal.strMeal} Gambar">
    <h3>${meal.strMeal}</h3>
  </div>
`;

const loader = () => `
  <div class="load">
    <div class="ring">
      <div></div><div></div><div></div><div></div>
    </div>
  </div>
`;

const failedLoad = () => `
  <div class="load">
    <h1 class="failed">Failed To Load Data</h1>
  </div>
`;

export {
  createRestoDetailTemplate,
  createRestoItemTemplate,
  createReviewTemplate,
  createMealItemTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
  loader,
  failedLoad,
};

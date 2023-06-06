import RestaurantSource from "../data/RestaurantSource";
import { createReviewTemplate } from "../views/templates/template-creator";

const addReview = {
  send(url) {
    const submit = document.querySelector("#submit");
    const name = document.querySelector("#name");
    const text = document.querySelector("#text");

    submit.addEventListener("click", () => {
      const review = {
        id: url.id,
        name: name.value,
        review: text.value,
      };

      if (review.name && review.review) {
        RestaurantSource.addReview(review)
          .then((response) => {
            RestaurantSource.getDetailRestaurant(url.id)
              .then(() => {
                const reviewContainer = document.querySelector("#review");
                reviewContainer.innerHTML = createReviewTemplate(response.customerReviews);
              })
              .catch((error) => {
                console.log(error);
              });
          })
          .catch((error) => {
            console.log(error);
          });
      }

      this._resetForm();
    });
  },

  _resetForm() {
    const name = document.querySelector("#name");
    const text = document.querySelector("#text");
    name.value = "";
    text.value = "";
  },
};

export default addReview;

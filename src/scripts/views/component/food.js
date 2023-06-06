class Food extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <h2>Explore</h2>
    <div class="food"></div>`;
  }
}
customElements.define("food-section", Food);

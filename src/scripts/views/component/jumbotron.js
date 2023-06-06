class Jumbotron extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <div class="jumbotron">
        <div class="container">
          <h1>Welcome to Arrya's Apps</h1>
          <p>Find the Fantastic restaurant in the World!</p>
          <a href="#title" class="btn btn-primary">Start</a>
        </div>
    </div>`;
  }
}

customElements.define("jumbotron-section", Jumbotron);

class Footer extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <footer>
      <p class="copyright">&copy; 2023. Arrya's Apps</p>
    </footer>
    `;
  }
}
customElements.define("footer-section", Footer);

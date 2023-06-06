class Header extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
    <header class="app-bar">
    <div class="menu">
      <button id="hamburgerButton">☰</button>
    </div>
    <div class="brand">
      <h1 class="brand-title">Arrya's Apps</h1>
    </div>
    <nav id="navigationDrawer" class="navigation">
      <ul>
        <li><a class="page" href="#/">Home</a></li>
        <li><a class="page" href="#/favorites">Favorites</a></li>
        <li><a class="page" href="https://www.linkedin.com/in/arryadali/" target="_blank">About Us</a></li>
      </ul>
    </nav>
  </header>`;
  }
}

customElements.define("header-section", Header);

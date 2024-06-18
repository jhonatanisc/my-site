import { html, css } from "lit";
import { BasePage } from "../components/base_components/base-page";

class HomePage extends BasePage {
  static styles = css`
    :host {
      display: block;
      padding: 16px;
    }
  `;

  constructor() {
    super();
    this.setPageTitle("Página de Inicio"); // Establecer el título de la página
  }

  render() {
    return html`
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
    `;
  }
}

customElements.define("home-page", HomePage);

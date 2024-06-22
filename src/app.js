import { html, css, LitElement } from "lit";
import { initRouter } from "./router.js";
import { navigateTo, goBack, goHome } from "./utils/Helm.js";
import "@material/web/button/text-button.js";
import "./pages/about-page.js";
import "./pages/home.page.js";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class AppRoot extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 16px;
    }

    @media (max-width: 768px) {
      /* Cambiar en dispositivos móviles */
    }

    @media (min-width: 769px) and (max-width: 1024px) {
      /* Cambiar en tablets */
    }

    @media (min-width: 1025px) {
      /* Cambiar en desktop */
    }
  `;

  render() {
    return html`
      <nav>
        <md-text-button @click="${() => goHome()}">Inicio</md-text-button>
        <md-text-button>Portafolio</md-text-button>
        <md-text-button @click="${() => navigateTo("/about")}"
          >Sobre mi</md-text-button
        >
      </nav>
      <main id="outlet"></main>
    `;
  }

  firstUpdated() {
    const outlet = this.shadowRoot.getElementById("outlet");
    initRouter(outlet); // Inicializar el enrutador con el contenedor correcto
  }
}

customElements.define("app-root", AppRoot);

import { html, css, LitElement } from "lit";
import { initRouter } from "./router.js";
import { navigateTo, goBack, goHome } from "./utils/Helm.js";
import "@material/web/button/text-button.js";
import "./pages/about-page.js";
import "./pages/home.page.js";
import "./components/menu-component.js";
import "./components/welcome-section.js";
import "pubsub.js";

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

  static properties = {
    welcomeVisibility: { type: Boolean, attribute: false },
  };

  constructor() {
    super();
    this.welcomeVisibility = true;
  }

  render() {
    return html`
      <!--<nav>
        <md-text-button @click="${() => goHome()}">Inicio</md-text-button>
        <md-text-button>Portafolio</md-text-button>
        <md-text-button @click="${() => navigateTo("/about")}"
          >Sobre mi</md-text-button
        >
      </nav>-->

      <welcome-section
        style="display: ${this.welcomeVisibility ? "flex" : "none"};"
      >
      </welcome-section>
      <menu-component></menu-component>
      <main id="outlet"></main>
    `;
  }

  firstUpdated() {
    const outlet = this.shadowRoot.getElementById("outlet");
    initRouter(outlet); // Inicializar el enrutador con el contenedor correcto
  }

  connectedCallback() {
    super.connectedCallback();
    pubsub.subscribe(
      "welcome-visibility",
      this.toggleWelcomeVisibility.bind(this)
    );
  }

  toggleWelcomeVisibility() {
    this.welcomeVisibility = !this.welcomeVisibility;
  }

  disconnectedCallback() {
    pubsub.unsubscribe("welcome-visibility", this.welcomeVisibility.bind(this));
    super.disconnectedCallback();
  }
}

customElements.define("app-root", AppRoot);

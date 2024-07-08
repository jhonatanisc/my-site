import { html, css, LitElement } from "lit";
import { initRouter } from "./router.js";
import { lightTheme } from "./themes/LightTheme.styles.js";
import { darkTheme } from "./themes/DarkTheme.styles.js";
import "@material/web/button/text-button.js";
import "./pages/about-page.js";
import "./pages/home.page.js";
import "./components/MenuComponent/MenuComponent.js";
import "./components/ThemeToggle/ThemeToggle.js";
import "pubsub.js";

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class AppRoot extends LitElement {
  static properties = {
    theme: { type: String },
  };

  constructor() {
    super();
    this.theme = localStorage.getItem("theme") || "light"; // obtener el tema guardado
  }

  static get styles() {
    return css`
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
  }

  render() {
    return html`
      <!--<menu-component></menu-component>-->
      <main id="outlet"></main>
      <theme-toggle></theme-toggle>
    `;
  }

  firstUpdated() {
    const outlet = this.shadowRoot.getElementById("outlet");
    initRouter(outlet); // Inicializar el enrutador con el contenedor correcto
  }
}

customElements.define("app-root", AppRoot);

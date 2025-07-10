import { html, css, LitElement } from "lit";
import { initRouter } from "./router.js";
import { lightTheme } from "./themes/LightTheme.styles.js";
import { darkTheme } from "./themes/DarkTheme.styles.js";
import "@material/web/button/text-button.js";
import "./pages/about-page.js";
import "./pages/home.page.js";
import "./pages/home-page.js";
import "./pages/index-page.js";
import "./components/MenuComponent/MenuComponent.js";
import "./components/ThemeToggle/ThemeToggle.js";
import "./components/SideComponent/SideComponent.js";
import "./components/ProfileComponent/ProfileComponent.js";
import "./components/SimpleMenu/SimpleMenu.js";
import "./components/TimeLineMenu/TimeLineMenu.js";
import "./components/NavbarComponent/NavbarComponent.js";
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
    scrolled: { type: Boolean },
  };

  constructor() {
    super();
    this.theme = localStorage.getItem("theme") || "light"; // obtener el tema guardado
    this.scrolled = false;
  }

  static get styles() {
    return css`
      :host {
        display: block;
      }

      .navbar-wrapper {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        z-index: 1000;
      }

      .navbar-inner {
        max-width: 1024px;
        margin: 0 auto;
        width: 100%;
      }

      .sticky {
        position: sticky;
        top: 0;
      }

      .relative {
        position: relative;
      }

      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
      }
      main {
        flex: 1;
        width: 100%;
        max-width: 1024px;
        margin: 0 auto;
        box-sizing: border-box;
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
    <div class="container">
      <div class="navbar-wrapper  ${this.scrolled ? 'sticky' : 'relative'}">
        <div class="navbar-inner">
          <navbar-component
            showLogoDesktop="${this.scrolled}"
            showLogoMobile="${this.scrolled}"
          ></navbar-component>
        </div>
      </div>
      <main id="outlet"></main>
    </div>
    `;
  }

  firstUpdated() {
    const outlet = this.shadowRoot.getElementById("outlet");
    initRouter(outlet); // Inicializar el enrutador con el contenedor correcto
    window.addEventListener("scroll", () => {
      this.scrolled = window.scrollY > 0;
    });
  }
}

customElements.define("app-root", AppRoot);

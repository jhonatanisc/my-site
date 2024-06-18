import { html, css, LitElement } from "lit";
import { initRouter } from "./router.js"; // Importar la función de inicialización del enrutador
import "./pages/home.page.js";
import "./pages/about-page.js";
import "./my-element.js";

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
  `;

  render() {
    return html`
      <my-element></my-element>
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
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

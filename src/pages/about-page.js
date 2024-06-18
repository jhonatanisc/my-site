import { html, css } from "lit";
import { BasePage } from "../components/base_components/base-page.js";

class AboutPage extends BasePage {
  static styles = css`
    :host {
      display: block;
      padding: 16px;
    }
  `;

  render() {
    return html`
      <h1>${this.pageTitle}</h1>
      <p>This is the about page. Learn more about us here.</p>
      <button @click="${this.goBack}">Regresar</button>
      <button @click="${(e) => this._navigate(e, "/")}">
        Regresar a Inicio
      </button>
    `;
  }
}

customElements.define("about-page", AboutPage);

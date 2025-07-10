import { html, css } from 'lit';
import { BasePage } from "../components/base_components/base-page.js";
import "../components/NavbarComponent/NavbarComponent.js";

export class IndexPage extends BasePage {
  static styles =
    css`
      :host {
        display: block;
        width: 100%;
        margin: 0 auto;
      }
    `;

  render() {
    return html`
      <navbar-component
        showLogoDesktop="true"
        showLogoMobile="true"
      ></navbar-component>
    `;
  }
}

customElements.define('index-page', IndexPage);
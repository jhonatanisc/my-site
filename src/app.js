import { html, css, LitElement } from "lit";
import { Router } from "@vaadin/router";
import "./pages/home.page.js";
import "./pages/about-page.js";

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
      <nav>
        <a href="/">Home</a>
        <a href="/about">About</a>
      </nav>
      <main id="outlet"></main>
    `;
  }

  firstUpdated() {
    const router = new Router(this.shadowRoot.getElementById("outlet"));
    router.setRoutes([
      { path: "/", component: "home-page" },
      { path: "/about", component: "about-page" },
    ]);
  }
}

customElements.define("app-root", AppRoot);

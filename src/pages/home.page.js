import { html, css, LitElement } from "lit";

class HomePage extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 16px;
    }
  `;

  render() {
    return html`
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
    `;
  }
}

customElements.define("home-page", HomePage);

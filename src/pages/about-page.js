import { html, css, LitElement } from "lit";

class AboutPage extends LitElement {
  static styles = css`
    :host {
      display: block;
      padding: 16px;
    }
  `;

  render() {
    return html`
      <h1>About Page</h1>
      <p>This is the about page. Learn more about us here.</p>
    `;
  }
}

customElements.define("about-page", AboutPage);

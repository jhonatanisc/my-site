import { html, css } from "lit";
import { BasePage } from "../components/base_components/base-page";
import "@material/web/button/filled-button.js";
import "@material/web/button/outlined-button.js";
import "@material/web/checkbox/checkbox.js";

class HomePage extends BasePage {
  static styles = css`
    :host {
      display: block;
      padding: 16px;
    }
  `;

  constructor() {
    super();
  }

  render() {
    return html`
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
      <label>
        Material 3
        <md-checkbox checked></md-checkbox>
      </label>

      <md-outlined-button>Back</md-outlined-button>
      <md-filled-button>Next</md-filled-button>
    `;
  }
}

customElements.define("home-page", HomePage);

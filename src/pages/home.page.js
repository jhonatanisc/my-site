import { html, css } from "lit";
import { BasePage } from "../components/base_components/base-page";
import "@material/web/button/filled-button.js";
import "@material/web/button/outlined-button.js";
import "@material/web/checkbox/checkbox.js";
import "@material/web/menu/menu.js";
import "@material/web/menu/menu-item.js";

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

  firstUpdated() {
    const anchorEl = this.shadowRoot.querySelector("#usage-anchor");
    const menuEl = this.shadowRoot.querySelector("#usage-menu");

    anchorEl.addEventListener("click", () => {
      menuEl.open = !menuEl.open;
    });
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
      <!-- Note the position: relative style -->
      <span style="position: relative">
        <md-filled-button id="usage-anchor">Set with idref</md-filled-button>
        <md-menu id="usage-menu" anchor="usage-anchor">
          <md-menu-item>
            <div slot="headline">Apple</div>
          </md-menu-item>
          <md-menu-item>
            <div slot="headline">Banana</div>
          </md-menu-item>
          <md-menu-item>
            <div slot="headline">Cucumber</div>
          </md-menu-item>
        </md-menu>
      </span>
    `;
  }
}

customElements.define("home-page", HomePage);

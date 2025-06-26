import { LitElement, html, css } from "lit";
import "@material/web/icon/icon";
import "pubsub.js";
import { welcomeSectionStyles } from "./WelcomeSection.styles.js";

class WelcomeSection extends LitElement {
  static styles = welcomeSectionStyles;

  constructor() {
    super();
    this.visibility = true;
  }

  firstUpdated() {}

  render() {
    return html`
      <div class="container">
        <h1>Hola! <md-icon>waving_hand</md-icon></h1>
        <p class="center-text terminal-text">
          Yo soy <span class="highlight">Jhonatan Vazquez</span>, un ingeniero
          desarrollador full-stack y entusiasta del diseño UX
        </p>
        <div class="center-text icons">
          <md-icon>code</md-icon>
          <md-icon>brush</md-icon>
        </div>
      </div>
    `;
  }
}

customElements.define("welcome-section", WelcomeSection);

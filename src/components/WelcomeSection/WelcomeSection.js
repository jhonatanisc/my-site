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

  toggleIcon() {
    const label = this.shadowRoot.querySelector(".dark-mode-toggle label");
    const checkbox = this.shadowRoot.querySelector("#darkModeToggle");
    if (checkbox.checked) {
      label.innerHTML = "<md-icon>dark_mode</md-icon>";
    } else {
      label.innerHTML = "<md-icon>light_mode</md-icon>";
    }
  }

  firstUpdated() {
    this.shadowRoot
      .querySelector("#darkModeToggle")
      .addEventListener("change", this.toggleIcon.bind(this));
    // Set initial state
    this.toggleIcon();
  }

  render() {
    return html`
      <div class="dark-mode-toggle">
        <input type="checkbox" id="darkModeToggle" />
        <label for="darkModeToggle"><md-icon>light_mode</md-icon></label>
      </div>
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

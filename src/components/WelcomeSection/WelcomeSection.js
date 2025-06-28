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

  firstUpdated() { }

  render() {
    return html`
      <div class="container">
      <div class="box">
        <div class="flex-item">
        <slot name="left"></slot>
        </div>
        <div class="flex-item">
        <slot name="right"></slot>
        </div>
      </div>
      </div>
    `;
  }
}

customElements.define("welcome-section", WelcomeSection);

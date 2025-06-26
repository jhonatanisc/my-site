import { LitElement, html, css } from "lit";
import "@material/web/icon/icon";
import "pubsub.js";
import { MenuComponentStyles } from "./MenuComponent.styles";

class MenuComponent extends LitElement {
  static styles = MenuComponentStyles;

  static get properties() {
    return {
      menuOpen: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.menuOpen = false;
  }

  toggleMenu() {
    pubsub.publish("welcome-visibility");
    this.menuOpen = !this.menuOpen;
  }

  render() {
    return html`
      <div class="menu">
        <div class="menu-item ${this.menuOpen ? "visible" : "hidden"}">
          <span class="text-item">Holi</span>
          <md-icon class="icon-item" aria-label="New Video Call"
            >video_call</md-icon
          >
        </div>

        <md-icon
          class="menu-item ${this.menuOpen ? "visible" : "hidden"}"
          aria-label="New SMS"
          >sms</md-icon
        >
        <md-icon
          class="menu-item ${this.menuOpen ? "visible" : "hidden"}"
          aria-label="New Group"
          >group</md-icon
        >
        <md-icon
          class="menu-icon"
          @click="${this.toggleMenu}"
          aria-label="Toggle menu"
          >arrow_circle_down</md-icon
        >
      </div>
    `;
  }
}

customElements.define("menu-component", MenuComponent);

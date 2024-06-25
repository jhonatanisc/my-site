import { LitElement, html, css } from "lit";
import "@material/web/icon/icon";
import "pubsub.js";

class MenuComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      position: fixed;
      bottom: 1rem;
      right: 1rem;
    }

    .menu {
      display: flex;
      flex-direction: column;
      align-items: flex-end;
    }

    .menu-icon {
      color: white;
      border: none;
      border-radius: 50%;

      height: 36px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      cursor: pointer;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
      transition: transform 0.3s;
    }

    .text-item {
      font-size: 14px;
      padding-right: 0.5rem;
    }

    .icon-item {
      font-size: 24px;
    }
    .menu-item {
      color: white;
      border: none;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
      margin: 0.5rem 0;
      transition: transform 0.3s, opacity 0.3s;
    }

    .menu-item.hidden {
      transform: translateY(0);
      opacity: 0;
    }

    .menu-item.visible {
      transform: translateY(-20%);
      opacity: 1;
    }
  `;

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

import { LitElement, html, css } from "lit";
import "@material/web/icon/icon";
import "pubsub.js";

class WelcomeSection extends LitElement {
  static styles = css`
    :host {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100vh;
      font-family: "Arial", sans-serif;
    }
    md-icon {
      color: #00e48c;
      vertical-align: middle;
    }
    @media (max-width: 768px) {
      :host {
        font-family: "Source Code Pro", monospace;
        font-size: 1em;
      }
      md-icon {
        --md-icon-size: 24px;
      }
      h1 {
        margin-bottom: 3rem;
      }
    }

    @media (min-width: 769px) and (max-width: 1024px) {
      :host {
        font-size: 2em;
      }
      md-icon {
        --md-icon-size: 48px;
      }
      h1 {
        margin-bottom: 6rem;
        margin-top: 3rem;
      }
    }

    .container {
      padding: 1rem;
      text-align: center;
    }

    .dark-mode-toggle {
      position: absolute;
      top: 1rem;
      right: 1rem;
    }

    .dark-mode-toggle input {
      display: none;
    }

    .dark-mode-toggle label {
      cursor: pointer;
    }

    .highlight {
      font-weight: bold;
    }

    .contact {
      margin-top: 2rem;
    }

    .contact a {
      color: inherit;
      text-decoration: none;
      border-bottom: 1px solid;
    }

    .icons {
      margin-bottom: 3rem;
    }

    .icon-down {
      position: absolute;
      bottom: 1rem;
      right: 1rem;
      color: gray;
    }

    .site-map {
      text-transform: uppercase;
    }

    @keyframes blink {
      0% {
        opacity: 1;
      }
      50% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    .terminal-text::after {
      content: "_";
      animation: blink 1s infinite;
    }
  `;

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

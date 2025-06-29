import { LitElement, html, css } from "lit";
import "@material/web/icon/icon";

class ThemeToggle extends LitElement {
  static properties = {
    theme: { type: String, reflect: true },
  };

  constructor() {
    super();
    this.theme = localStorage.getItem("app-theme") || "light";
    this._applyTheme();
  }

  _applyTheme() {
    document.documentElement.setAttribute("theme", this.theme);
  }

  toggleTheme() {
    this.theme = this.theme === "light" ? "dark" : "light";
    localStorage.setItem("app-theme", this.theme);
    this._applyTheme();
  }

  render() {
    return html`
      <div class="dark-mode-toggle">
        <input
          type="checkbox"
          id="darkModeToggle"
          @change=${this.toggleTheme}
          ?checked=${this.theme === "dark"}
        />
        <label for="darkModeToggle">
          <md-icon
            >${this.theme === "light" ? "dark_mode" : "light_mode"}</md-icon
          >
        </label>
      </div>
    `;
  }

  static styles = css`
    label {
      color: var(--text-color);
    }
    .dark-mode-toggle {
      position: fixed;
      top: 1rem;
      right: 1rem;
    }

    .dark-mode-toggle input {
      display: none;
    }

    .dark-mode-toggle label {
      cursor: pointer;
    }
  `;
}

customElements.define("theme-toggle", ThemeToggle);

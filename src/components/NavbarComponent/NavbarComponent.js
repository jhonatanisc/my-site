import { LitElement, html, css } from 'lit';
import "../ThemeToggle/ThemeToggle.js";

export class NavbarComponent extends LitElement {
  static properties = {
    showLogoDesktop: { type: Boolean },
    showLogoMobile: { type: Boolean },
    menuOpen: { type: Boolean }
  };

  constructor() {
    super();
    this.showLogoDesktop = true;
    this.showLogoMobile = true;
    this.menuOpen = false;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  static styles = css`
    :host {
      display: block;
      width: 100%;
      max-width: 1024px;
      font-family: Fira Code, monospace;
    }

    nav {
      position: sticky;
      top: 0;
      z-index: 1000;
      color: var(--text-color);
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: .9rem;
    }

    .logo {
      display: flex;
      flex-direction: column;
      font-size: 0.9rem;
      color: var(--text-color);
    }

    .links {
      display: flex;
      gap: 1.5rem;
      align-items: center;
    }

    .link {
      text-decoration: none;
      font-size: 0.8rem;
      cursor: pointer;
      color: var(--text-color);
      transition: color 0.3s ease;
    }

    .link:hover {
    }

    .menu-icon {
      display: none;
      font-size: 1.5rem;
      cursor: pointer;
      color: var(--text-color);
    }

    .mobile-menu {
      display: none;
      flex-direction: column;
      gap: 1rem;
      padding: 1rem;
      background-color: var(--background-color);
    }

    @media (max-width: 768px) {
      .links {
        display: none;
      }

      .menu-icon {
        display: block;
      }

      .mobile-menu {
        display: flex;
      }

      .mobile-menu[hidden] {
        display: none;
      }

      .logo.desktop {
        display: none;
      }

      .logo.mobile {
        display: flex;
      }
    }

    @media (min-width: 769px) {
      .logo.mobile {
        display: none;
      }

      .mobile-menu {
        display: none;
      }
    }
  `;

  renderLogo(type) {
    const isDesktop = type === 'desktop';
    const shouldShow = isDesktop ? this.showLogoDesktop : this.showLogoMobile;
    if (!shouldShow) return null;

    return html`
      <div class="logo ${type}">
        <strong>Jhonatan Vázquez</strong>
        <span style="font-size: 0.75rem;">Desarrollador FullStack</span>
      </div>
    `;
  }

  render() {
    const links = ['Inicio', 'Sobre Mí', 'Experiencia', 'Portafolio', 'DevBuguer'];

    return html`
      <nav>
        ${this.renderLogo('desktop')}

        <div class="links">
          ${links.map(
      (item) => html`<a class="link" href="#">${item}</a>`
    )}
          <theme-toggle></theme-toggle>
        </div>

        ${this.renderLogo('mobile')}

        <div class="menu-icon" @click="${this.toggleMenu}">☰</div>
      </nav>

      <div class="mobile-menu" ?hidden="${!this.menuOpen}">
        ${links.map(
      (item) => html`<a class="link" href="#">${item}</a>`
    )}
        <theme-toggle></theme-toggle>
      </div>
    `;
  }
}

customElements.define('navbar-component', NavbarComponent);

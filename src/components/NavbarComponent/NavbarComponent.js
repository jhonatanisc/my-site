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
    this.showLogoDesktop = false;
    this.showLogoMobile = false;
    this.menuOpen = false;
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  handleMobileLinkClick() {
    this.menuOpen = false;
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
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.9rem;
      background-color: var(--background-color);
      color: var(--text-color);
    }

    .logo {
      display: flex;
      flex-direction: column;
      font-size: 0.9rem;
      color: var(--text-color);
      min-width: 120px;
      transition: opacity 0.3s ease, transform 0.3s ease;
    }

    .logo.hidden {
      opacity: 0;
      transform: translateY(-10%);
      visibility: hidden;
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
      color: var(--accent-color, #f39c12);
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
    const logoClass = `logo ${type} ${shouldShow ? '' : 'hidden'}`;

    return html`
      <div class="${logoClass}">
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
          ${links.map(item => html`
            <a class="link" href="#">${item}</a>
          `)}
          <theme-toggle></theme-toggle>
        </div>

        ${this.renderLogo('mobile')}

        <div class="menu-icon" role="button" aria-label="Abrir menú" @click="${this.toggleMenu}">☰</div>
      </nav>

      <div class="mobile-menu" ?hidden="${!this.menuOpen}">
        ${links.map(item => html`
          <a class="link" href="#" @click="${this.handleMobileLinkClick}">${item}</a>
        `)}
        <theme-toggle></theme-toggle>
      </div>
    `;
  }
}

customElements.define('navbar-component', NavbarComponent);

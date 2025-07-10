import { LitElement, html, css } from 'lit';

export class TimelineMenu extends LitElement {
  static properties = {
    activeSection: { type: String },
  };

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      align-items: start;
      background: #0c0c18;
      padding: 1rem;
      color: #888;
      font-family: 'Fira Code', monospace;
    }

    .timeline {
      border-left: 2px solid #555;
      padding-left: 1rem;
      position: relative;
    }

    .item {
      margin: 1.5rem 0;
      position: relative;
      cursor: pointer;
      transition: color 0.3s ease;
    }

    .item::before {
      content: '';
      position: absolute;
      left: -1.1rem;
      top: 0.15rem;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background-color: transparent;
      border: 2px solid #555;
    }

    .item.active {
      color: #fff;
    }

    .item.active::before {
      background-color: #ccc;
      border-color: #ccc;
    }
  `;

  constructor() {
    super();
    this.activeSection = 'Sobre Mi';
  }

  setActive(section) {
    this.activeSection = section;
    const event = new CustomEvent('section-selected', {
      detail: { section },
      bubbles: true,
      composed: true,
    });
    this.dispatchEvent(event);
  }

  render() {
    const items = ['Sobre Mi', 'Poderes', 'Experiencia', 'Entrenamiento', 'Portafolio', 'Blog'];
    return html`
      <div class="timeline">
        ${items.map(
      (item) => html`
            <div
              class="item ${this.activeSection === item ? 'active' : ''}"
              @click=${() => this.setActive(item)}
            >
              ${item}
            </div>
          `
    )}
      </div>
    `;
  }
}

customElements.define('timeline-menu', TimelineMenu);

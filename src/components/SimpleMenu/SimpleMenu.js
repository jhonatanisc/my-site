import { LitElement, html, css } from 'lit';

export class SimpleMenu extends LitElement {
  static styles = css`
    :host {
    margin-top: 5rem;
      display: block;
      color: #cfcfcf;
      font-family: 'Fira Code', monospace;
      padding: 2rem;
    }

    ol {
      list-style: none;
      padding: 0;
      margin: 0;
      counter-reset: item;
    }

    li {
      counter-increment: item;
      font-size: 1rem;
      color: var(--white-transparent);
      margin-bottom: 1rem;
      transition: color 0.3s ease;
    }

    li::before {
      content: counter(item) '. ';
      color: var(--white-transparent);
    }

    li.active {
    font-size: 1.25rem;
      color: var(--text-color);
    }

    li.active::before {
      color: var(--text-color);
    }

    li:hover {
      color: var(--white-transparent);
      cursor: pointer;
    }
  `;

  render() {
    return html`
      <ol>
        <li class="active">Sobre Mi</li>
        <li>Poderes</li>
        <li>Experiencia</li>
        <li>Entrenamiento</li>
        <li>Portafolio</li>
        <li>Blog (Devbuger)</li>
      </ol>
    `;
  }
}

customElements.define('simple-menu', SimpleMenu);

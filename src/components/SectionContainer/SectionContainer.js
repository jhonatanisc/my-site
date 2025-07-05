import { LitElement, html, css } from 'lit';

export class SectionContainer extends LitElement {
  static styles = css`
    :host {
    display: flex;
    box-sizing: border-box;
    align-items: center;
    max-width: 1024px;
    width: 100%;
   }
    section {
      display: block;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%; /* Asegura que ocupe todo el alto del contenedor */
      padding: 1rem; /* Espacio alrededor del contenido */
      margin-bottom: 4rem; /* Espacio entre secciones */
    }
`;


  constructor() {
    super();
    this.visibility = true; // Default visibility
  }

  render() {
    return html`
      <section>
        <slot></slot>
      </section>
    `;
  }
}

customElements.define('section-container', SectionContainer);
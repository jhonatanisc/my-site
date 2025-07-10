import { LitElement, html } from 'lit';
import { welcomeComponentStyles } from './WelcomeComponent.styles.js';

export class WelcomeComponent extends LitElement {
  static styles = welcomeComponentStyles;

  render() {
    return html`
      <div class="container">
        <span class="hello-world terminal-text">Hola Mundo</span>
        <p>
          En este sitio encontrarás mis proyectos, habilidades, estudios y todo lo que he construido en mi camino como desarrollador.
        </p>
      </div>
    `;
  }
}

customElements.define('welcome-component', WelcomeComponent);

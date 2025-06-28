import { LitElement, html, css } from 'lit';
import { welcomeComponentStyles } from './WelcomeComponent.styles.js';

export class WelcomeComponent extends LitElement {
  static styles = welcomeComponentStyles;

  constructor() {
    super();
    this.visibility = true;
  }

  firstUpdated() {
    // You can add any initialization logic here if needed
  }

  render() {
    return html`
    <div class="welcome-container">
      <span class="hello-world terminal-text">Hola Mundo</span>
      <p class="center-text">
        En este sitio encontrarás mis proyectos, habilidades, estudios y todo lo que he construido en mi camino como desarrollador.
      </p> 
      </div>
    `;
  }

}

customElements.define('welcome-component', WelcomeComponent);
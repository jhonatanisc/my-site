import { LitElement, html } from 'lit';
import { TitleSectionStyles } from './TitleSection.style.js'

export class TitleSection extends LitElement {
  static styles = TitleSectionStyles;

  static get properties() {
    return {
      title: { type: String },
      description: { type: String }
    }
  }

  constructor() {
    super();
    this.title;
    this.description;
  }

  render() {
    return html`
      <div class="section-container">
        <span class="hello-world terminal-text">${this.title}</span>
        <p class="center-text">
         ${this.description}
        </p> 
      </div>
    `;
  }
}

customElements.define('title-section', TitleSection);
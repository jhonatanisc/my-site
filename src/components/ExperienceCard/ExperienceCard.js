import { LitElement, html, css } from "lit";
import "@material/web/chips/chip-set";
import "@material/web/chips/assist-chip";
import "@material/web/icon/icon";
import { ExperienceCardStyle } from "./ExperienceCard.styles.js";

class ExperienceCard extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      company: { type: String },
      period: { type: String },
      description: { type: String },
      skills: { type: Array },
      icon: { type: String }, // Nueva propiedad para el icono
    };
  }

  constructor() {
    super();
    this.title = "";
    this.company = "";
    this.period = "";
    this.description = "";
    this.skills = [];
  }

  static styles = ExperienceCardStyle;

  render() {
    return html`
      <div class="container">
        <div class="time-line">
          <div class="icon-container">
            <md-icon>work</md-icon>
          </div>
          <div class="vertical-period">${this.period}</div>
        </div>
        <div class="data-exp">
          <div class="title">${this.title}</div>
          <div class="company">${this.company}</div>
          <div class="description">${this.description}</div>
          <div class="tags">
            ${this.skills.map((skill) => html`<div class="tag">${skill}</div>`)}
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("experience-card", ExperienceCard);

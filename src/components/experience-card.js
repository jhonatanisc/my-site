import { LitElement, html, css } from "lit";
import "@material/web/chips/chip-set";
import "@material/web/chips/assist-chip";
import "@material/web/icon/icon";

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

  static styles = css`
    :host {
      display: block;
      border-radius: 8px;
      max-width: 500px; /* Puedes ajustar este valor según tus necesidades */
      --md-assist-chip-outline-color: #ffffff;
      --md-assist-chip-label-text-color: #ffffff;
      --md-assist-chip-label-text-size: 0.7rem;
      --md-assist-chip-elevated-container-color: #ffffff;
      --md-assist-chip-container-height: 24px;
    }
    .container {
      display: grid;
      grid-template-columns: 5% 95%;
      align-items: start;
      padding-bottom: 1rem;
      gap: 10px;
      margin-bottom: 1rem;
      border-left: 2px solid #34a779;
    }
    .time-line {
    }

    .data-exp {
      padding-left: 10px;
      background-color: #0000002f;
      padding: 0.5em;
      margin-bottom: 0.5em;
      border-radius: 5px;
    }
    .period {
      font-size: 0.9em;
      color: #ffffff;
    }
    .title {
      font-size: 1.2em;
      font-weight: bold;
    }
    .company {
      font-size: 1em;
      color: #a0a0a0;
    }
    .description {
      margin-top: 8px;
      font-size: 0.9em;
    }
    md-chip-set {
      padding-top: 5px;
      padding-bottom: 5px;
    }
    md-icon {
      font-size: 1.2rem;
      vertical-align: middle;
      color: #ffffff;
    }
    .vertical-period {
      font-family: "Source Code Pro", monospace;
      writing-mode: vertical-rl;
      transform: rotate(180deg);
      font-size: 0.8em;
      color: #34a779;
      margin-top: 5px;
      text-transform: uppercase;
    }
  `;

  render() {
    return html`
      <div class="container">
        <div class="time-line">
          <md-icon>work</md-icon>
          <div class="vertical-period">${this.period}</div>
        </div>
        <div class="data-exp">
          <div class="title">${this.title}</div>
          <div class="company">${this.company}</div>
          <div class="description">${this.description}</div>
          <!--<md-chip-set>
            ${this.skills.map(
            (skill) => html`<md-assist-chip label="${skill}"></md-assist-chip>`
          )}
          </md-chip-set>-->
        </div>
      </div>
    `;
  }
}

customElements.define("experience-card", ExperienceCard);

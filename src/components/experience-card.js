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
      --md-assist-chip-outline-color: #34a779;
      --md-assist-chip-label-text-color: #34a779;
      --md-assist-chip-label-text-size: 0.7rem;
      --md-assist-chip-elevated-container-color: #ffffff;
      --_hover-label-text-color: #34a779;

      --md-assist-chip-container-height: 24px;
    }
    .container {
      display: grid;
      grid-template-columns: 10% 90%;
      align-items: start;
      padding-bottom: 1rem;
      margin-bottom: 1rem;
    }
    .time-line {
      margin-right: 10px;
      border-right: 2px solid #34a779;
      height: 100%;
      vertical-align: middle;
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
      float: inline-end;
      font-size: 0.8em;
      color: #34a779;
      margin-top: 5px;
      text-transform: uppercase;
    }
    .icon-container {
      text-align: center;
      border-radius: 5px 0px 0px 5px;
      background-color: #34a779;
    }

    .tags {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 1rem;
    }

    .tag {
      display: flex;
      align-items: center;
      border: 1px solid #34a779;
      border-radius: 5px;
      padding: 3px 10px;
      font-size: 14px;
      color: #34a779;
      text-transform: uppercase;
      text-decoration: bold;
      font-size: 0.7rem;
      text-align: center;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
  `;

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

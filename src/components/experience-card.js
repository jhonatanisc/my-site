import { LitElement, html, css } from "lit";
import "@material/web/chips/chip-set";
import "@material/web/chips/assist-chip";

class ExperienceCard extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      company: { type: String },
      period: { type: String },
      description: { type: String },
      skills: { type: Array },
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
      font-family: "Arial", sans-serif;
      max-width: 300px;
    }
    .period {
      font-size: 0.9em;
    }
    .title {
      font-size: 1.2em;
      font-weight: bold;
    }
    .company {
      font-size: 1em;
    }
    .description {
      margin-top: 8px;
      font-size: 0.9em;
    }
    md-chip-set {
      padding-top: 5px;
      padding-bottom: 5px;
    }
  `;

  render() {
    return html`
      <div>
        <div class="period">${this.period}</div>
        <div class="title">${this.title}</div>
        <div class="company">${this.company}</div>
        <div class="description">${this.description}</div>
        <md-chip-set>
          ${this.skills.map(
            (skill) => html`<md-assist-chip label="${skill}"></md-assist-chip>`
          )}
        </md-chip-set>
      </div>
    `;
  }
}

customElements.define("experience-card", ExperienceCard);

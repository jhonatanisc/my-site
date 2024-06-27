import { LitElement, html, css } from "lit";
import "@material/web/chips/chip-set";
import "@material/web/chips/assist-chip";
import "@material/web/icon/icon";

class CourseCard extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      institution: { type: String },
      period: { type: String },
      description: { type: String },
      type: { type: String },
    };
  }

  constructor() {
    super();
    this.title = "";
    this.institution = "";
    this.period = "";
    this.description = "";
    this.type = "";
  }

  static styles = css`
    :host {
      display: block;
      border-radius: 8px;
      max-width: 500px; /* Puedes ajustar este valor según tus necesidades */
      --md-assist-chip-outline-color: #e0ad21;
      --md-assist-chip-label-text-color: #e0ad21;
      --md-assist-chip-label-text-size: 0.7rem;
      --md-assist-chip-elevated-container-color: #ffffff;
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
      border-right: 2px solid #e0ad21;
      height: 100%;
      vertical-align: middle;
      margin-right: 10px;
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
    .institution {
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
      color: #e0ad21;
      margin-top: 5px;
      text-transform: uppercase;
    }
    .icon-container {
      text-align: center;
      border-radius: 5px 0px 0px 5px;
      background-color: #e0ad21;
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
      border: 1px solid #e0ad21;
      border-radius: 5px;
      padding: 3px 10px;
      font-size: 14px;
      color: #e0ad21;
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
            <md-icon>school</md-icon>
          </div>
          <div class="vertical-period">${this.period}</div>
        </div>
        <div class="data-exp">
          <div class="title">${this.title}</div>
          <div class="institution">${this.institution}</div>
          <div class="description">${this.description}</div>

          <div class="tags">
            <div class="tag">${this.type}</div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("course-card", CourseCard);

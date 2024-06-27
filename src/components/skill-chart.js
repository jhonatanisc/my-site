import { LitElement, html, css } from "lit";
import "@material/web/progress/linear-progress";

class SkillChart extends LitElement {
  static get properties() {
    return {
      skills: { type: Array },
      nameChart: { type: String },
    };
  }

  constructor() {
    super();
    this.nameChart;
    this.skills = [];
  }

  static styles = css`
    :host {
      display: block;
      font-family: "Arial", sans-serif;
      border-radius: 8px;
      max-width: 500px;
      --md-linear-progress-track-height: 2px;
      --md-linear-progress-track-shape: 2px;
      --md-linear-progress-active-indicator-height: 2px;
      --md-sys-color-primary: #8c58ab;
      --md-sys-color-surface-container-highest: #1b1b1b;
    }
    .container {
      font-family: "Source Code Pro", monospace;
      background-color: #0000002f;
      padding: 0.5em;
      margin-bottom: 0.5em;
      border-radius: 5px;
    }
    .level-text {
      font-size: 0.8rem;
      display: block;
      color: #a8a8a8;
      text-align: right;
      text-transform: uppercase;
    }
    .skill-text {
      font-size: 0.8rem;
      display: block;
      text-transform: uppercase;
    }
    .title-chart {
      display: grid;
      grid-template-columns: 90% 10%;
      align-items: end;
      margin-bottom: 1rem;
      border-bottom: 2px solid #8c58ab;
    }
    .title-chart label {
      font-family: "Source Code Pro", monospace;
      text-align: end;
      color: #8c58ab;
      font-size: 0.8rem;
      bottom: 1px;
      margin-right: 5px;
      text-transform: uppercase;
    }
    .icon-container {
      border-radius: 5px 5px 0px 0px;
      text-align: center;
      background-color: #8c58ab;
    }
    md-icon {
      font-size: 1.2rem;
      vertical-align: middle;
      color: #ffffff;
    }
  `;

  render() {
    return html`
      <div>
        <div class="title-chart">
          <label>${this.nameChart}</label>
          <div class="icon-container">
            <md-icon>bolt</md-icon>
          </div>
        </div>
        ${this.skills.map(
          (skill) => html`
            <div class="container">
              <label class="skill-text">${skill.name}</label>
              <md-linear-progress
                value="${skill.level / 100}"
              ></md-linear-progress>
              <label class="level-text">${skill.levelText}</label>
            </div>
          `
        )}
      </div>
    `;
  }
}

customElements.define("skill-chart", SkillChart);

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
      --md-sys-color-primary: #8a60a3;
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
  `;

  render() {
    return html`
      <div>
        <h2>${this.nameChart}</h2>
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

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
      width: 300px;

      --md-linear-progress-track-height: 16px;
      --md-linear-progress-track-shape: 16px;
      --md-linear-progress-active-indicator-height: 16px;
      --md-sys-color-primary: #006d6d;
      --md-sys-color-surface-container-highest: #cfcfcf;
    }
  `;

  render() {
    return html`
      <div>
        <h2>${this.nameChart}</h2>
        ${this.skills.map(
          (skill) => html`
            <label>${skill.levelText}</label>
            <md-linear-progress
              value="${skill.level / 100}"
            ></md-linear-progress>
        </br>
          `
        )}
      </div>
    `;
  }
}

customElements.define("skill-chart", SkillChart);

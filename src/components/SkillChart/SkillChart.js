import { LitElement, html, css } from "lit";
import "@material/web/progress/linear-progress";
import { SkillChartStyle } from "./SkillChart.styles.js";

class SkillChart extends LitElement {
  static get properties() {
    return {
      skills: { type: Array },
      nameChart: { type: String },
      color: { type: String }
    };
  }

  constructor() {
    super();
    this.nameChart;
    this.skills = [];
    this.color;
  }

  static styles = SkillChartStyle;

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

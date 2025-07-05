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

  firstUpdated() {
    if (this.color?.startsWith("--")) {
      // Si es una variable CSS, como "--purple"
      const resolvedColor = getComputedStyle(document.documentElement).getPropertyValue(this.color)?.trim();
      if (resolvedColor) {
        this.style.setProperty("--white", resolvedColor);
      }
    } else if (this.color) {
      // Si es un valor directo como "#f44336"
      this.style.setProperty("--white", this.color);
    }
  }

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

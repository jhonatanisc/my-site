import { LitElement, html, css } from "lit";
import "@material/web/chips/chip-set";
import "@material/web/chips/assist-chip";
import "@material/web/icon/icon";
import { CourseCardStyle } from "./CourseCard.styles.js";

class CourseCard extends LitElement {
  static styles = CourseCardStyle;

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

  static styles = CourseCardStyle;

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

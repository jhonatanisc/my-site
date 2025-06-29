import { LitElement, html } from "lit";
import { sectionComponentStyles } from "./SectionComponent.styles.js";

export class SectionComponent extends LitElement {
  static styles = sectionComponentStyles;

  constructor() {
    super();
    this.visibility = true;
  }

  firstUpdated() {
    // You can add any initialization logic here if needed
  }

  render() {
    return html`
      <div class="section-container">
        <div class="box">
          <div class="flex-item">
            <slot name="left"></slot>
          </div>
          <div class="flex-item">
            <slot name="right"></slot>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define("section-component", SectionComponent);
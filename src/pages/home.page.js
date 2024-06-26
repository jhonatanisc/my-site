import { html, css } from "lit";
import { BasePage } from "../components/base_components/base-page";
import "../components/experience-card";
import "../components/skill-chart";
import "../components/course-card";
class HomePage extends BasePage {
  static styles = css`
    :host {
      display: block;
      padding: 16px;
    }
  `;

  constructor() {
    super();
  }

  firstUpdated() {}

  render() {
    return html`
      <experience-card
        title="Creative Technologist Co-op"
        company="MullenLowe U.S."
        period="Jul — Dic 2015"
        description="Developed, maintained, and shipped production code for client websites. Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more."
        .skills="${["HTML", "CSS", "JavaScript", "jQuery"]}"
      ></experience-card>
      <experience-card
        title="Creative Technologist Co-op"
        company="MullenLowe U.S."
        period="Jul — Dec 2015"
        description="Developed, maintained, and shipped production code for client websites. Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more."
        .skills="${["HTML", "CSS", "JavaScript", "jQuery"]}"
      ></experience-card>
      <experience-card
        title="Creative Technologist Co-op"
        company="MullenLowe U.S."
        period="Ene — Mar 2015"
        description="Developed."
        .skills="${["HTML", "CSS", "JavaScript", "jQuery"]}"
      ></experience-card>
  </br>
      <skill-chart
        .skills="${[
          { name: "HTML", level: 80, levelText: "Avanzado" },
          { name: "CSS", level: 70, levelText: "Intermedio" },
          { name: "JavaScript", level: 90, levelText: "Experto" },
          { name: "React", level: 60, levelText: "Intermedio" },
          { name: "Node.js", level: 75, levelText: "Avanzado" },
        ]}" 
        nameChart="Habilidades"
      ></skill-chart>

      </br>
      <course-card
    nombreCurso="Curso de JavaScript Avanzado"
    fechaFinalizacion="Junio 2023"
    institucion="Universidad X"
    tipo="curso"
  ></course-card>
    `;
  }
}

customElements.define("home-page", HomePage);

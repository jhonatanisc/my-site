import { html, css } from "lit";
import { BasePage } from "../components/base_components/base-page";
import "../components/ExperienceCard/ExperienceCard.js";
import "../components/SkillChart/SkillChart.js";
import "../components/CourseCard/CourseCard.js";
import "../components/SectionComponent/SectionComponent.js";
import "../components/WelcomeComponent/WelcomeComponent.js";
import "../components/ProfileComponent/ProfileComponent.js";
class HomePage extends BasePage {
  static styles = css`
  :host {
      display: block;
      align-items: center;
    }

  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    width: 100%;
  }

  .box {
      display: flex;
      justify-content: space-around;
  }
      
  .flex-item {
      padding: 1rem;
      flex: 1 1 400px;
  }
  `;

  constructor() {
    super();
  }

  render() {
    return html`
    <div class="container">
    <section-component>
      <welcome-component slot="left"></welcome-component>
      <profile-component slot="right"></profile-component>
    </section-component>
    <section-component>
      <welcome-component slot="left"></welcome-component>
    <div slot="right">
      <skill-chart
        .skills="${[
        { name: "HTML", level: 80, levelText: "Avanzado" },
        { name: "CSS", level: 70, levelText: "Intermedio" },
        { name: "JavaScript", level: 90, levelText: "Experto" },
        { name: "React", level: 60, levelText: "Intermedio" },
        { name: "Node.js", level: 75, levelText: "Avanzado" },
      ]}" 
        nameChart="Frontend Web"
      ></skill-chart>
      <skill-chart
        .skills="${[
        { name: "HTML", level: 80, levelText: "Avanzado" },
        { name: "CSS", level: 70, levelText: "Intermedio" },
        { name: "JavaScript", level: 90, levelText: "Experto" },
        { name: "React", level: 60, levelText: "Intermedio" },
        { name: "Node.js", level: 75, levelText: "Avanzado" },
      ]}" 
        nameChart="Mobile Dev"
      ></skill-chart>
      </div>
    </section-component>
<div class="box">
  <div class="flex-item">
  <h1>Experiencia</h1>
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
  </div>
  <div class="flex-item">
  <h1>Habilidades</h1>
      <skill-chart
        .skills="${[
        { name: "HTML", level: 80, levelText: "Avanzado" },
        { name: "CSS", level: 70, levelText: "Intermedio" },
        { name: "JavaScript", level: 90, levelText: "Experto" },
        { name: "React", level: 60, levelText: "Intermedio" },
        { name: "Node.js", level: 75, levelText: "Avanzado" },
      ]}" 
        nameChart="Lenguajes"
      ></skill-chart>
  </div>
  <div class="flex-item">
  <h1>Preparacion</h1>

<course-card
  title="Ing. Sistenas Computacionales"
  institution= "Tecnologico de Estudios Superiores de Ecatepec"
  period="Ene — Mar 2015"
  description="Developed."
  type="Licenciatura"
></course-card>
  </div>

</div>

    </div>
    `;
  }

  firstUpdated() {
    super.firstUpdated();
    /*const welcomeItem = this.shadowRoot.getElementById("welcome-item");
    document.addEventListener("scroll", function () {
      if (window.scrollY !== 0) {
        welcomeItem.classList.add("highlighted");
      }
      if (window.scrollY < 0) {
        welcomeItem.classList.remove("highlighted");
      }
    });*/
  }
}

customElements.define("home-page", HomePage);

import { html, css } from "lit";
import { BasePage } from "../components/base_components/base-page";
import "../components/ExperienceCard/ExperienceCard.js";
import "../components/SkillChart/SkillChart.js";
import "../components/CourseCard/CourseCard.js";
import "../components/WelcomeSection/WelcomeSection.js";
class HomePage extends BasePage {
  static styles = css`
    :host {
      display: block;
      margin: 16px;
    }
    #welcome-item {
      height: 100vh; /* Altura inicial o cualquier valor inicial */
      transition: height 0.3s ease-in-out; /* Transición suave */
    }
    #welcome-item.highlighted {
      height: 20vh; /* Altura reducida cuando se destaca */
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
<welcome-section id="welcome-item"></welcome-section>
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
 
  </br>
  

      </br>
  
    `;
  }

  firstUpdated() {
    super.firstUpdated();
    const welcomeItem = this.shadowRoot.getElementById("welcome-item");
    document.addEventListener("scroll", function () {
      if (window.scrollY !== 0) {
        welcomeItem.classList.add("highlighted");
      }
      if (window.scrollY < 0) {
        welcomeItem.classList.remove("highlighted");
      }
    });
  }
}

customElements.define("home-page", HomePage);

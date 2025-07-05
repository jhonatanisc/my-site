import { html, css } from "lit";
import { BasePage } from "../components/base_components/base-page.js";
import "../components/ExperienceCard/ExperienceCard.js";
import "../components/SkillChart/SkillChart.js";
import "../components/CourseCard/CourseCard.js";
import "../components/SectionComponent/SectionComponent.js";
import "../components/WelcomeComponent/WelcomeComponent.js";
import "../components/ProfileComponent/ProfileComponent.js";
import "../components/TitleSection/TitleSection.js"
class HomePagge extends BasePage {
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
  .skills-grid {
      flex: 2 1 600px;
      display: grid;
      justify-content: center;
      grid-template-columns: repeat(2, 1fr); /* ← aquí se limita a 2 columnas */
      gap: 1.5rem;
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
      <title-section
      slot="left"
      title="Mis Poderes"
      description="Estas son las tecnologías y herramientas que forman parte de mi día a día como desarrollador. Algunas son esenciales, otras complementan mis proyectos cuando el reto lo exige."
      ></title-section>
    <div slot="right" class="skills-grid">
      <skill-chart
        .skills="${[
        { name: "HTML", level: 80, levelText: "Avanzado" },
        { name: "CSS", level: 70, levelText: "Intermedio" },
        { name: "JavaScript", level: 90, levelText: "Experto" },
        { name: "Lit", level: 60, levelText: "Intermedio" },
        { name: "Node.js", level: 75, levelText: "Avanzado" },
      ]}" 
        nameChart="Frontend Web"
        color="--indigo"
      ></skill-chart>
      <skill-chart
        .skills="${[
        { name: "Kotlin", level: 80, levelText: "Avanzado" },
        { name: "Xamarin", level: 70, levelText: "Intermedio" },
        { name: "Flutter", level: 90, levelText: "Experto" },
      ]}" 
        nameChart="Mobile Dev"
        color="--cian"
      ></skill-chart>
      <skill-chart
        .skills="${[
        { name: "Figma", level: 85, levelText: "Avanzado" },
        { name: "Adobe XD", level: 70, levelText: "Intermedio" },
        { name: "Miro", level: 75, levelText: "Intermedio" },
      ]}"
        nameChart="Diseño UX/UI"
        color="--magenta"
      ></skill-chart>
      <skill-chart
        .skills="${[
        { name: "Jira", level: 85, levelText: "Avanzado" },
        { name: "Trello", level: 80, levelText: "Avanzado" },
        { name: "Asana", level: 75, levelText: "Intermedio" },
        { name: "Github", level: 90, levelText: "Experto" },
      ]}"
        nameChart="Colaborativo"
        color="--mint"
      ></skill-chart>
      </div>
    </section-component>
    <section-component>
      <title-section
        slot="left"
        title="Mi Historia"
        description="A lo largo de mi carrera he tenido la oportunidad de trabajar en proyectos desafiantes y emocionantes. Aquí comparto algunas de mis experiencias más significativas."
      ></title-section>
      <div slot="right">
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
    </section-component>
    <section-component>
      <title-section
        slot="left"
        title="Entrenamiento"
        description="Estos son algunos de los cursos y certificaciones que he completado para mantenerme actualizado y seguir creciendo profesionalmente."
      ></title-section>
      <div slot="right">
        <course-card
          title="Full Stack Web Development"
          institution="Platzi"
          period="2022"
          description="Aprendí a desarrollar aplicaciones web completas utilizando tecnologías modernas de frontend y backend."
          type="Diplomado"
        ></course-card>
        <course-card
          title="Diseño de Interfaces de Usuario"
          institution="Coursera"
          period="2023"
          description="Me especialicé en la creación de interfaces intuitivas y atractivas centradas en el usuario."
          type="Certificación"
        ></course-card>
        <course-card
          title="DevOps y Automatización"
          institution="Udemy"
          period="2021"
          description="Implementé prácticas de integración y entrega continua para mejorar el ciclo de vida del desarrollo."
          type="Curso"
        ></course-card>
      </div>
    </section-component>
    <section-component>
      <profile-component slot="left"></profile-component>
      <div slot="right">
        <p>
          Soy un desarrollador apasionado por la tecnología y el aprendizaje continuo. Me especializo en crear soluciones innovadoras tanto en frontend como en mobile, combinando creatividad y eficiencia para aportar valor en cada proyecto.
        </p>
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

customElements.define("home-page2", HomePagge);

import { html, css } from 'lit';
import { BasePage } from "../components/base_components/base-page.js";
import "../components/WelcomeComponent/WelcomeComponent.js";
import "../components/ProfileComponent/ProfileComponent.js";
import "../components/SkillChart/SkillChart.js";
import "../components/TitleOfSection/TitleOfSection.js";

export class IndexPage extends BasePage {
  static styles =
    css`
      :host {
        display: block;
        margin: 0 auto;
      }


      .welcome {
        display: flex;
        flex-direction: column; /* por defecto: vertical (mobile) */
        gap: 1rem;
        min-height: 100vh; /* ocupa toda la pantalla */
      }

      .item {
        flex: 1 1 50%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      /* Estilos base (mobile) */
      .item-1 {
        order: 1;
        justify-content: flex-end;
      }
      .item-2 {
        order: 2;
        justify-content: flex-start;
      }

     

      /* Cambiar orden en desktop */
      @media (min-width: 768px) {
        .welcome {
          flex-direction: row; /* horizontal en desktop */
        }

        .item-1 {
          order: 2;
          justify-content: center;
        }

        .item-2 {
          order: 1;
          justify-content: center;
        }

         .skills-grid {
      flex: 2 1 600px;
      display: grid;
      justify-content: center;
      grid-template-columns: repeat(2, 1fr); /* ← aquí se limita a 2 columnas */
      gap: 1.5rem;
    }
      }

    `;

  render() {
    return html`

      <section class="welcome">
      <profile-component
        class="item item-1"
      ></profile-component>
      <welcome-component
        class="item item-2"
      ></welcome-component>
      </section>
      <section class="about-me">
      <title-of-section>Sobre mí</title-of-section>
      <p style="text-align: justify; line-height: 1.6; font-size: 1.2rem; padding: 1rem; font">
        Soy Eric Jhonatan Vázquez Gómez, ingeniero en sistemas y desarrollador web especializado en tecnologías JavaScript como LitElement, React y Node.js. Tengo experiencia creando interfaces accesibles y eficientes, enfocadas en mejorar la experiencia del usuario y aportar valor al negocio.
      </p>
      <p style="text-align: justify; line-height: 1.6; font-size: 1.2rem; padding: 1rem; font">
        He participado en proyectos como desarrollador y Scrum Master, lo que me ha permitido combinar una visión técnica y organizativa dentro de equipos ágiles. Me interesa mantenerme actualizado en desarrollo, UX/UI y metodologías ágiles para lograr entregas de calidad.
      </p>
      <p style="text-align: justify; line-height: 1.6; font-size: 1.2rem; padding: 1rem; font">
        Actualmente desarrollo Innpix, un proyecto personal que ofrece soluciones digitales integrales a pequeñas empresas, emprendedores y startups, combinando diseño personalizado, desarrollo web y soporte técnico.
      </p>
      <p style="text-align: justify; line-height: 1.6; font-size: 1.2rem; padding: 1rem; font">
        En lo personal, disfruto aprender constantemente, salir a correr y explorar la fotografía callejera como medio creativo. Valoro el equilibrio entre trabajo y vida personal para mantenerme productivo y con claridad mental.
      </p>
      <div class="skills-grid">
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
        class="align-end"
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
      </section> 
    `;
  }
}

customElements.define('index-page', IndexPage);
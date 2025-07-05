import { html, css } from 'lit';
import { BasePage } from '../components/base_components/base-page.js';
import '../components/SkillChart/SkillChart.js';
import '../components/ExperienceCard/ExperienceCard.js';
import '../components/CourseCard/CourseCard.js';
import '../components/SectionContainer/SectionContainer.js';
import '../components//SocialMediaIcons/SocialMediaIcons.js';


export class HomePage extends BasePage {
  static styles = css`
  :host {
      display: block;
      align-items: center;
    }
   .skills-grid {
      flex: 2 1 600px;
      display: grid;
      justify-content: center;
      grid-template-columns: repeat(2, 1fr); /* ← aquí se limita a 2 columnas */
      gap: 1.5rem;
    }
  .align-end {
  align-self: end;
  }
      `;

  render() {
    return html`
    <section-container>
      <p>
      Soy Eric Jhonatan Vázquez Gómez, ingeniero en sistemas y desarrollador web con especialización en tecnologías JavaScript, incluyendo frameworks y herramientas modernas como LitElement, React, Node.js, y consumo de APIs REST. Cuento con experiencia en el desarrollo de interfaces intuitivas, accesibles y con alto rendimiento, enfocadas en brindar valor tanto al usuario como al negocio.
A lo largo de mi trayectoria he participado en distintos proyectos como desarrollador y también en roles de liderazgo ágil como Scrum Master, lo que me ha permitido integrar una visión técnica y organizativa al trabajo en equipo. Me interesa mantenerme actualizado con las mejores prácticas de desarrollo y metodologías ágiles, buscando siempre una mejora continua en cada entrega.
Además, tengo un fuerte interés en el diseño centrado en el usuario (UX/UI), lo que me ha llevado a complementar mis habilidades técnicas con una perspectiva más cercana a la experiencia del cliente final.
Actualmente también estoy desarrollando Innpix, un proyecto personal enfocado en ofrecer soluciones digitales a pequeñas empresas, emprendedores y startups, combinando diseño personalizado, desarrollo web y soporte técnico en un solo paquete.
En el plano personal, disfruto aprender constantemente, salir a correr por las mañanas y practicar actividades que combinan el ejercicio físico con la meditación, inspiradas en artes marciales. También estoy explorando el mundo de la fotografía callejera, como una forma de observar y expresar la vida cotidiana desde otra perspectiva. Valoro mucho el equilibrio entre el trabajo y la vida personal, y siempre busco cultivar hábitos que me ayuden a mantenerme enfocado, productivo y con una mentalidad clara.
 </p>
    </section-container>
    <section-container>
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
    </section-container>
    <section-container title="Experiencia" id="experience">
      <experience-card
        company="Tech Solutions"
        role="Desarrollador Frontend"
        period="2021 - Actualidad"
        description="Desarrollo de aplicaciones web modernas usando React y LitElement, liderando equipos ágiles y colaborando en la definición de arquitectura frontend."
      ></experience-card>
      <experience-card
        company="Innovatech"
        role="Scrum Master / Fullstack"
        period="2019 - 2021"
        description="Gestión de proyectos ágiles, facilitando ceremonias Scrum y participando en el desarrollo de soluciones backend con Node.js y frontend con Vue.js."
      ></experience-card>
      <experience-card
        company="Freelance"
        role="Desarrollador Web"
        period="2017 - 2019"
        description="Desarrollo de sitios y aplicaciones web para pequeñas empresas, abarcando desde el diseño UX/UI hasta la implementación y despliegue."
      ></experience-card>
    </section-container>
    <section-container title="Entrenamiento">
      <course-card
        title="Curso Profesional de React"
        institution="Platzi"
        year="2023"
        description="Profundización en React, hooks, context y patrones avanzados de componentes."
      ></course-card>
      <course-card
        title="Diseño de Experiencia de Usuario (UX)"
        institution="Coursera"
        year="2022"
        description="Principios de diseño centrado en el usuario, prototipado y pruebas de usabilidad."
      ></course-card>
      <course-card
        title="Node.js: De cero a experto"
        institution="Udemy"
        year="2021"
        description="Desarrollo de APIs RESTful, autenticación y despliegue de aplicaciones Node.js."
      ></course-card>
    </section-container>
      `;
  }
}

customElements.define('home-page', HomePage);
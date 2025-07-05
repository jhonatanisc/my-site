import { html, css } from "lit";
import { BasePage } from "../components/base_components/base-page.js";

class AboutPage extends BasePage {
  static styles = css`
    :host {
      display: block;
      padding: 16px;
    }
  `;

  render() {
    return html`
      <h1>${this.pageTitle}</h1>
      <p>Soy Eric Jhonatan Vázquez Gómez, ingeniero en sistemas y desarrollador web con especialización en tecnologías JavaScript, incluyendo frameworks y herramientas modernas como LitElement, React, Node.js, y consumo de APIs REST.  Cuento con experiencia en el desarrollo de interfaces intuitivas, accesibles y con alto rendimiento, enfocadas en brindar valor tanto al usuario como al negocio.
A lo largo de mi trayectoria he participado en distintos proyectos como desarrollador y también en roles de liderazgo ágil como Scrum Master, lo que me ha permitido integrar una visión técnica y organizativa al trabajo en equipo. Me interesa mantenerme actualizado con las mejores prácticas de desarrollo y metodologías ágiles, buscando siempre una mejora continua en cada entrega.
Además, tengo un fuerte interés en el diseño centrado en el usuario (UX/UI), lo que me ha llevado a complementar mis habilidades técnicas con una perspectiva más cercana a la experiencia del cliente final.
Actualmente también estoy desarrollando Innpix, un proyecto personal enfocado en ofrecer soluciones digitales a pequeñas empresas, emprendedores y startups, combinando diseño personalizado, desarrollo web y soporte técnico en un solo paquete.
En el plano personal, disfruto aprender constantemente, salir a correr por las mañanas y practicar actividades que combinan el ejercicio físico con la meditación, inspiradas en artes marciales. También estoy explorando el mundo de la fotografía callejera, como una forma de observar y expresar la vida cotidiana desde otra perspectiva.  Valoro mucho el equilibrio entre el trabajo y la vida personal, y siempre busco cultivar hábitos que me ayuden a mantenerme enfocado, productivo y con una mentalidad clara.</p>
      <button @click="${this.goBack}">Regresar</button>
      <button @click="${(e) => this._navigate(e, "/")}">
        Regresar a Inicio
      </button>
    `;
  }
}

customElements.define("about-page", AboutPage);

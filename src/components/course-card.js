import { LitElement, html, css } from "lit";

class CourseCard extends LitElement {
  static styles = css`
    .certificado {
      margin-bottom: 20px;
      width: 300px;
    }
    .titulo {
      font-size: 1.2em;
      font-weight: bold;
    }
    .detalle {
      margin-top: 10px;
    }
    .etiqueta {
      background-color: #007bff;
      color: white;
      padding: 5px 10px;
      border-radius: 5px;
      display: inline-block;
      margin-top: 10px;
    }
  `;

  static properties = {
    nameCourse: { type: String },
    period: { type: String },
    institution: { type: String },
    type: { type: String }, // 'curso' o 'diplomado'
  };

  render() {
    return html`
      <div class="certificado">
        <div class="titulo">${this.nombreCurso}</div>
        <div class="detalle">
          Fecha de finalización: ${this.fechaFinalizacion}
        </div>
        <div class="detalle">Institución: ${this.institucion}</div>
        <div class="etiqueta">${this.tipo}</div>
      </div>
    `;
  }
}

customElements.define("course-card", CourseCard);

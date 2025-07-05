import { LitElement, html, css } from 'lit';

export class SideComponent extends LitElement {
  static styles = css`
    :host {
      display: flex;
      max-width: 1440px;
      width: 100%;
      height: 100vh;
    }

    .box {
      display: flex;
      width: 100%;
      height: 100vh; /* Asegura que el contenedor también lo tenga */
    }

    .flex-item {
      padding: 1rem;
    }

    .left-column {
      flex: 0 0 40%;
      max-width: 40%;
      padding-right: 1rem;
    }

    .right-column {
  flex: 1;
  padding-left: 1rem;
  height: 100vh;
  position: sticky;
  top: 0;
  overflow-y: auto;

  /* Oculta la barra de scroll sin desactivar el scroll */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* IE y Edge */

  /* Webkit (Chrome, Safari) */
}
.right-column::-webkit-scrollbar {
  display: none;
}
  `;

  render() {
    return html`
      <div class="box">
        <div class="left-column flex-item">
          <slot name="left"></slot>
        </div>
        <div class="right-column flex-item">
          <slot name="right"></slot>
        </div>
      </div>
    `;
  }
}

customElements.define('side-component', SideComponent);

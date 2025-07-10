import { html, css } from 'lit';
import { BasePage } from "../components/base_components/base-page.js";
import "../components/WelcomeComponent/WelcomeComponent.js";
import "../components/ProfileComponent/ProfileComponent.js";
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
        height: 100vh; /* ocupa toda la pantalla */


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
    `;
  }
}

customElements.define('index-page', IndexPage);
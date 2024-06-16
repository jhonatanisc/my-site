import { LitElement, html, css } from "lit";
import PubSub from "../utils/PubSub";

class ButtonComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      text-align: center;
    }
    button {
      padding: 8px 16px;
      font-size: 16px;
      cursor: pointer;
      background-color: #28a745;
      color: #fff;
      border: none;
      border-radius: 4px;
    }
  `;

  render() {
    return html`
      <button @click="${this.emitIncrementEvent}">Incrementar</button>
    `;
  }

  emitIncrementEvent() {
    PubSub.publish("increment-event");
  }
}

customElements.define("button-component", ButtonComponent);

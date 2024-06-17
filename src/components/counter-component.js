import { LitElement, html, css } from "lit";
//import PubSub from "../utils/PubSub.js";
import "pubsub.js";

class CounterComponent extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: Arial, sans-serif;
      text-align: center;
    }
  `;

  static properties = {
    count: { type: Number },
  };

  connectedCallback() {
    super.connectedCallback();
    pubsub.subscribe("increment-event", this.handleIncrementEvent);
  }

  handleIncrementEvent() {
    this.count++;
    console.log(this.count);
    this.requestUpdate(); // Actualizar el renderizado cuando cambia el mensaje
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    //pubsub.unsubscribe("increment-event", this.handleIncrementEvent);
  }

  constructor() {
    super();
    this.count = 0;
    this.handleIncrementEvent = this.handleIncrementEvent.bind(this);
  }

  render() {
    return html` <h1>Contador: ${this.count}</h1> `;
  }
}

customElements.define("counter-component", CounterComponent);

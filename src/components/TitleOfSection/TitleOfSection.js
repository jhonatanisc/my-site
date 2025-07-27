import { LitElement, html, css } from 'lit';

export class TitleOfSection extends LitElement {
  static styles = css`
    :host {
      display: block;
       font-size: 2.1rem;
    font-family: "Fira Code", monospace;
    }
       @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
    .hello-world {
   
    color: #fff;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 0.3rem 0.6rem;
    border-radius: 8px;
  }

  .terminal-text::after {
    content: "_";
    animation: blink 1s infinite;
  }
  `;

  render() {
    return html`<span class="hello-world terminal-text"><slot><slot></span>`;
  }
}

customElements.define('title-of-section', TitleOfSection);
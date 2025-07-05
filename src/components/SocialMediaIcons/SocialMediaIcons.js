import { LitElement, html, css } from 'lit';
import bootstrapIcons from 'bootstrap-icons/font/bootstrap-icons.css?inline'; // solo con Vite o loaders

export class SocialMediaIcons extends LitElement {
  static styles = [css([bootstrapIcons]), css`
    :host {
      display: block;
      height: 100px;
      }

    .links {
      display: flex;
      justify-content: center;
      gap: 2.5rem;
      margin-top: 1rem;
    }

    .links a {
      color: var(--text-color);
      font-size: 1.8rem;
      text-decoration: none;
      transition: transform 0.2s ease;
    }

    .links a:hover {
      transform: scale(1.2);
      color: #f0c000;
    }
  `];

  render() {
    return html`
      <div class="links">
        <a href="#" title="LinkedIn"><i class="bi bi-linkedin"></i></a>
        <a href="#" title="StackOverflow"><i class="bi bi-stack-overflow"></i></a>
        <a href="#" title="GitHub"><i class="bi bi-github"></i></a>
        <a href="#" title="Slack"><i class="bi bi-slack"></i></a>
      </div>
    `;
  }
}

customElements.define('social-media-icons', SocialMediaIcons);
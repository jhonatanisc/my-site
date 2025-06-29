import { LitElement, html, css } from 'lit';
import { profileComponentStyles } from './ProfileComponent.styles.js';
import bootstrapIcons from 'bootstrap-icons/font/bootstrap-icons.css?inline'; // solo con Vite o loaders
export class ProfileComponent extends LitElement {
  static styles = [
    profileComponentStyles,
    css([bootstrapIcons])];
  constructor() {
    super();
    this.visibility = true;
  }

  render() {
    return html`
      <img class="profile-picture" src="https://avatars.githubusercontent.com/u/12345678?v=4" alt="Eric Jhonatan Vazquez Gomez" />
      <div class="name">Eric Jhonatan Vazquez Gomez</div>
      <div class="title">Desarrollador FullStack</div>
       <div class="links">
        <a href="#" title="LinkedIn"><i class="bi bi-linkedin"></i></a>
        <a href="#" title="StackOverflow"><i class="bi bi-stack-overflow"></i></a>
        <a href="#" title="GitHub"><i class="bi bi-github"></i></a>
        <a href="#" title="Slack"><i class="bi bi-slack"></i></a>
      </div>
    `;
  }
}

customElements.define('profile-component', ProfileComponent);
import { css } from "lit";

export const profileComponentStyles = css`
      :host {
      display: block;
      font-family: 'Fira Code', regular, monospace;
      text-align: center;
      padding: 2rem 1rem;
    }

    .profile-picture {
      width: 20em;
      height: 20em;
      border-radius: 50%;
      object-fit: cover;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
    }

    .name {
      margin-top: 1.5rem;
      font-size: 1.5rem;
      letter-spacing: 1px;
    }

    .title {
      font-size: 1rem;
      margin-bottom: 2rem;
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
      `;
// WelcomeSectionStyles.js
import { css } from "lit";

export const welcomeSectionStyles = css`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    font-family: "Arial", sans-serif;
  }
  md-icon {
    color: var(--text-color);
    vertical-align: middle;
  }
  @media (max-width: 768px) {
    :host {
      font-family: "Source Code Pro", monospace;
      font-size: 1em;
    }
    md-icon {
      --md-icon-size: 24px;
    }
    h1 {
      margin-bottom: 3rem;
    }
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    :host {
      font-size: 2em;
    }
    md-icon {
      --md-icon-size: 48px;
    }
    h1 {
      margin-bottom: 6rem;
      margin-top: 3rem;
    }
  }

  .container {
    padding: 1rem;
    text-align: center;
  }

  .highlight {
    font-weight: bold;
  }

  .contact {
    margin-top: 2rem;
  }

  .contact a {
    color: inherit;
    text-decoration: none;
    border-bottom: 1px solid;
  }

  .icons {
    margin-bottom: 3rem;
  }

  .icon-down {
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    color: gray;
  }

  .site-map {
    text-transform: uppercase;
  }

  @keyframes blink {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .terminal-text::after {
    content: "_";
    animation: blink 1s infinite;
  }
`;

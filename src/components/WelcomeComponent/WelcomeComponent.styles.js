import { css } from 'lit';

export const welcomeComponentStyles = css`
  :host {
    display: flex;
    padding: 1rem;
    box-sizing: border-box;
    
  }

  .container {
    text-align: center;
  }

  .hello-world {
    font-family: "Fira Code", monospace;
    font-size: 2.1rem;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.8);
    padding: 0.3rem 0.6rem;
    border-radius: 8px;
  }

  .terminal-text::after {
    content: "_";
    animation: blink 1s infinite;
  }

  p {
    margin-top: 1rem;
    font-family: "Hind Vadodara", sans-serif;
    font-size: 1.2rem;
    color: var(--text-color);

  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }

  @media (max-width: 768px) {
    
  }
  @media (min-width: 768px) {
   .container {
      text-align: left;
    }
  }
`;

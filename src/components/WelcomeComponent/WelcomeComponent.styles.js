import { css } from "lit";

export const welcomeComponentStyles = css`
  :host {
    display: flex;
    height: 100%;
    align-items: center;
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
    p {
    font-family: "Playfair Display", serif;
    font-size: 2.3em;
    text-align: left;
  }
  span.hello-world {
    display:block;
    font-family: "Fira Code", monospace;
    font-size: 3.5em;
    color: #fff;
    text-align: left;
    padding-left: 0.5rem;
    background-color: rgba(0, 0, 0, 0.8);
    max-width: 500px;
    border-radius: 8px;
  }    
`;
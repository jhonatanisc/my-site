import { css } from "lit";

export const CourseCardStyle = css`
  :host {
    display: block;
    border-radius: 8px;
    //max-width: 500px; /* Puedes ajustar este valor según tus necesidades */
    --md-assist-chip-outline-color: var(--yellow);
    --md-assist-chip-label-text-color: var(--yellow);
    --md-assist-chip-label-text-size: 0.7rem;
    --md-assist-chip-elevated-container-color: #ffffff;
    --md-assist-chip-container-height: 24px;
  }
  .container {
    display: grid;
    grid-template-columns: 10% 90%;
    align-items: start;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
  }
  .time-line {
    border-right: 2px solid var(--yellow);
    height: 100%;
    vertical-align: middle;
    margin-right: 10px;
  }

  .data-exp {
    padding-left: 10px;
    background-color: var(--background-transparent);
    padding: 0.5em;
    margin-bottom: 0.5em;
    border-radius: 5px;
  }

  .title {
    font-size: 1.2em;
    font-weight: bold;
  }
  .institution {
    font-size: 1em;
    color: #a0a0a0;
  }
  .description {
    margin-top: 8px;
    font-size: 0.9em;
  }
  md-chip-set {
    padding-top: 5px;
    padding-bottom: 5px;
  }
  md-icon {
    font-size: 1.2rem;
    vertical-align: middle;
    color: #ffffff;
  }
  .vertical-period {
    font-family: "Source Code Pro", monospace;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    float: inline-end;
    font-size: 0.8em;
    color: var(--yellow);
    margin-top: 5px;
    text-transform: uppercase;
  }
  .icon-container {
    text-align: center;
    border-radius: 5px 0px 0px 5px;
    background-color: var(--yellow);
  }

  .tags {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 1rem;
  }

  .tag {
    display: flex;
    align-items: center;
    border: 1px solid var(--yellow);
    border-radius: 5px;
    padding: 3px 10px;
    font-size: 14px;
    color: var(--yellow);
    text-transform: uppercase;
    text-decoration: bold;
    font-size: 0.7rem;
    text-align: center;
  }
`;

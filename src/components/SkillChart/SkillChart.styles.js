import { css } from "lit";

export const SkillChartStyle = css`
  :host {
    display: block;
    font-family: "Arial", sans-serif;
    border-radius: 8px;
    max-width: 500px;
    --md-linear-progress-track-height: 3px;
    --md-linear-progress-track-shape: 3px;
    --md-linear-progress-active-indicator-height: 3px;
    --md-sys-color-primary: var(--purple);
    --md-sys-color-surface-container-highest: transparent;
  }
  .container {
    font-family: "Source Code Pro", monospace;
    background-color: var(--background-transparent);
    padding: 0.5em;
    margin-bottom: 0.5em;
    border-radius: 5px;
  }
  .level-text {
    font-size: 0.8rem;
    display: block;
    color: #a8a8a8;
    text-align: right;
    text-transform: uppercase;
  }
  .skill-text {
    font-size: 0.8rem;
    display: block;
    text-transform: uppercase;
  }
  .title-chart {
    display: grid;
    grid-template-columns: 90% 10%;
    align-items: end;
    margin-bottom: 1rem;
    border-bottom: 2px solid var(--purple);
  }
  .title-chart label {
    font-family: "Source Code Pro", monospace;
    text-align: end;
    color: #8c58ab;
    font-size: 0.8rem;
    bottom: 1px;
    margin-right: 5px;
    text-transform: uppercase;
  }
  .icon-container {
    border-radius: 5px 5px 0px 0px;
    text-align: center;
    background-color: var(--purple);
  }
  md-icon {
    font-size: 1.2rem;
    vertical-align: middle;
    color: #ffffff;
  }
`;

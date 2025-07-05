import { css } from "lit";

export const SkillChartStyle = css`
  :host {
    display: block;
    font-family: "Fira Code", mnospace;
    border-radius: 8px;
    //max-width: 500px;
    --md-linear-progress-track-height: 5px;
    --md-linear-progress-track-shape: 5px;
    --md-linear-progress-active-indicator-height: 5px;
    --md-sys-color-primary: var(--white);
    --md-sys-color-surface-container-highest: transparent;
  }
  .container {
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
    border-bottom: 2px solid var(--white);
  }
  .title-chart label {
    font-family: "Fira Code", mnospace;
    text-align: end;
    color: var(--white);
    font-size: 0.8rem;
    bottom: 1px;
    margin-right: 5px;
    text-transform: uppercase;
  }
  .icon-container {
    border-radius: 5px 5px 0px 0px;
    text-align: center;
    background-color: var(--white);
  }
  md-icon {
    font-size: 1.2rem;
    vertical-align: middle;
    color: #ffffff;
  }
`;

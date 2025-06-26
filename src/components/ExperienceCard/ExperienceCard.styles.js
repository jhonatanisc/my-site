import { css } from "lit";

export const ExperienceCardStyle = css`
  :host {
    display: block;
    border-radius: 8px;
    //max-width: 500px;
    --md-assist-chip-outline-color: var(--green);
    --md-assist-chip-label-text-color: var(--green);
    --md-assist-chip-label-text-size: 0.7rem;
    --md-assist-chip-elevated-container-color: var(--white);
    --_hover-label-text-color: var(--green);
    --md-assist-chip-container-height: 24px;
  }

  .container {
    display: grid;
    grid-template-columns: 10% 90%;
    align-items: start;
    padding: 1rem 0;
    margin-bottom: 1rem;
  }

  .time-line {
    margin-right: 10px;
    border-right: 2px solid var(--green);
    height: 100%;
    vertical-align: middle;
  }

  .data-exp {
    padding: 0.5em;
    margin-bottom: 0.5em;
    border-radius: 5px;
    background-color: var(--background-transparent);
  }

  .period {
    font-size: 0.9em;
    color: #ffffff;
  }

  .title {
    font-size: 1.2em;
    font-weight: bold;
  }

  .company {
    font-size: 1em;
    color: var(--text-gray);
  }

  .description {
    margin-top: 8px;
    font-size: 0.9em;
  }

  .vertical-period {
    font-family: "Source Code Pro", monospace;
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    float: inline-end;
    font-size: 0.8em;
    color: var(--green);
    margin-top: 5px;
    text-transform: uppercase;
  }

  .icon-container {
    text-align: center;
    border-radius: 5px 0 0 5px;
    background-color: var(--green);
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
    border: 1px solid var(--green);
    border-radius: 5px;
    padding: 3px 10px;
    font-size: 0.7rem;
    color: var(--green);
    text-transform: uppercase;
    font-weight: bold;
    text-align: center;
  }

  md-icon {
    font-size: 1.2rem;
    vertical-align: middle;
    color: var(--white);
  }
`;

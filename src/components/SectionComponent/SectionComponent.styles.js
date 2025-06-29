import { css } from 'lit';

export const sectionComponentStyles = css`
  :host {
    display: flex;
    align-items: center;
    max-width: 1440px;
    width: 100%;
    height: 100vh;
  }
    .box {
      display: flex;
      justify-content: space-around;
    }

  .flex-item {
      padding: 0rem;
      flex: 1 1 300px;
      
  }
`;
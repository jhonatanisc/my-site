// WelcomeSectionStyles.js
import { css } from "lit";

export const MenuComponentStyles = css`
  :host {
    display: block;
    position: fixed;
    bottom: 1rem;
    right: 1rem;
  }

  .menu {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }

  .menu-icon {
    color: white;
    border: none;
    border-radius: 50%;

    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    cursor: pointer;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s;
  }

  .text-item {
    font-size: 14px;
    padding-right: 0.5rem;
  }

  .icon-item {
    font-size: 24px;
  }
  .menu-item {
    color: white;
    border: none;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
    margin: 0.5rem 0;
    transition: transform 0.3s, opacity 0.3s;
  }

  .menu-item.hidden {
    transform: translateY(0);
    opacity: 0;
  }

  .menu-item.visible {
    transform: translateY(-20%);
    opacity: 1;
  }
`;

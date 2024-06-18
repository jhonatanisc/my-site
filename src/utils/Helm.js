import { getRouter } from "../router.js";

export function navigateTo(path, params = {}) {
  const queryString = new URLSearchParams(params).toString();
  const fullPath = queryString ? `${path}?${queryString}` : path;
  window.history.pushState({}, "", fullPath); // Cambia la URL del navegador
  getRouter().render(fullPath); // Renderiza la ruta correspondiente
}

export function goBack() {
  window.history.back();
}

export function goBackSteps(steps) {
  window.history.go(-steps);
}

export function goHome() {
  navigateTo("/");
}

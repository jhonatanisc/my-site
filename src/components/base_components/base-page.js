import { LitElement } from "lit";
import { navigateTo, goBack, goHome } from "../../utils/Helm.js";

// Definir la clase BasePage que extiende LitElement
export class BasePage extends LitElement {
  // Método para navegar a una ruta específica con parámetros opcionales
  navigateTo(path, params = {}) {
    navigateTo(path, params);
  }

  // Método para regresar a la página anterior
  goBack() {
    goBack();
  }

  // Método para ir a la página de inicio
  goHome() {
    goHome();
  }

  // Método privado para manejar la navegación al hacer clic en un enlace
  _navigate(event, path) {
    event.preventDefault(); // Prevenir el comportamiento por defecto del enlace
    this.navigateTo(path); // Navegar a la ruta especificada
  }
}

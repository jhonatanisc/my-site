import { Router } from "@vaadin/router";

let router;

export function initRouter(outlet) {
  router = new Router(outlet);
  router.setRoutes([
    { path: "/", component: "home-page" },
    { path: "/about", component: "about-page" },
  ]);
}

export function getRouter() {
  return router;
}

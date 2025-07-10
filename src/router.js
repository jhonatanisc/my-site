import { Router } from "@vaadin/router";

let router;

export function initRouter(outlet) {
  router = new Router(outlet);
  router.setRoutes([
    { path: "/about", component: "about-page" },
    { path: "/", component: "index-page" },
  ]);
}

export function getRouter() {
  return router;
}

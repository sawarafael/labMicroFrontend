import { registerApplication, start } from "single-spa";

registerApplication({
  name: "@angularApp/app-navbar",
  app: () => System.import("@angularApp/app-navbar"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@angularApp/app-departamento",
  app: () => System.import("@angularApp/app-departamento"),
  activeWhen: ["/"],
});

registerApplication({
  name: "@vueApp/app-helloWorld",
  app: () => System.import("@vueApp/app-helloWorld"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});

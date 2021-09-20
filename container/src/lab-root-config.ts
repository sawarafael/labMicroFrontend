import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "lab-departament",
  app: () =>
    import("./../../MicroDepartamento/departamento/src/main.single-spa"),
  activeWhen: "/appDepartamento",
});

// registerApplication({
//   name: "@lab/navbar",
//   app: () => System.import("@lab/navbar"),
//   activeWhen: ["/"]
// });

start({
  urlRerouteOnly: true,
});

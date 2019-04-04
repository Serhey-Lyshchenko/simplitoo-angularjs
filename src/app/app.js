const angular = require("angular");
require("@uirouter/angularjs");
require("../style/app.scss");

const {
  tileComponent,
  headerComponent,
  sidebarComponent,
  contentComponent
} = require("./components");

const { tileService } = require("./services");

const routerConfig = require("./router.config");

const app = {
  template: require("./app.html"),
  controllerAs: "app"
};

angular
  .module("app", ["ui.router"])
  .config(routerConfig)
  .service("tileService", tileService)
  .component("app", app)
  .component("tile", tileComponent)
  .component("mainHeader", headerComponent)
  .component("sidebar", sidebarComponent)
  .component("mainContent", contentComponent);

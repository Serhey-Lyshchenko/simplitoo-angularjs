module.exports = function(
  $stateProvider,
  $urlRouterProvider,
  $locationProvider
) {
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise("/main/page_1");

  $stateProvider
    .state("index", {
      url: "/main",
      template: "<app></app>"
    })
    .state("index.main", {
      url: "/page_1",
      template: "<main-content></main-content>"
    })
    .state("index.other", {
      url: "/page_2",
      template: "<div>Other page</div>"
    });
};

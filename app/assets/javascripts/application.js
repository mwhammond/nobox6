//= require jquery
//= require angular
//= require ui-bootstrap-tpls-0.2.0 
//= require angular-resource
//= require services/projectService
//= require controllers/projects

angular.module('AngularRails', ['projectService', 'ui.bootstrap'])
  .config(['$httpProvider', function(provider){
    provider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
  }])
  .config(['$routeProvider', function(router){
    router
      .when('/project', {templateUrl:'/project/index.html', controller:ProjectCtrl})
      .when('/project/add', {templateUrl:'/project/add.html', controller: ProjectAddCtrl})
      .when('/project/:project_id', {templateUrl:'/project/show.html', controller:ProjectShowCtrl})
      .when('/project/:project_id/edit', {templateUrl:'/project/edit.html', controller: ProjectEditCtrl})
      .otherwise({redirectTo: '/project'});
  }]);

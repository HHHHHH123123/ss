angular.module('mls',["ui.router",'angularCSS','homeModule','mineModule','sortModule','shopcarModule'])
.config(function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise('/home');
})
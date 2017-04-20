angular.module('sortModule',[])
.config(function($stateProvider, $urlRouterProvider){
    $stateProvider
        .state('sort',{
            url: '/sort',
            templateUrl: 'components/sort/sort.html',
            controller:'sortCtrl',
            css:'components/sort/sort.css'
        })
})
.controller('sortCtrl',['$scope',function($scope){
	$scope.name = '2';
}])
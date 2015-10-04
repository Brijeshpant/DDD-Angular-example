angular.module('app', ['app.service']).controller('userCtrl', function ($scope,UserService,JobService) {

    $scope.user = UserService.getUser();
    $scope.jobs = JobService.getJobs();



});

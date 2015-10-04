angular.module('app', ['app.service']).controller('userCtrl', function ($scope,UserService,JobService) {
    $scope.user = UserService.getUser();
    $scope.jobs = JobService.getJobs();
    $scope.applyJob = function (job) {
        $scope.user.appliedJob.push(job);
    };
    $scope.unApplyJob = function (job) {
        $scope.user.appliedJob.splice($scope.user.appliedJob.indexOf(job), 1);
    };

});

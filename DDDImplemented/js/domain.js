angular.module('app.domain', [])
        .factory('User', function () {
            return function (user) {
                this.id = user.id;
                this.name=user.name;
                this.role = user.role;
                this.profile = user.profile;
                this.appliedJob = user.appliedJob;

                this.userViewableJobs = function (jobs) {
                    var userViewableJobs = [];
                    self =this;
                    if (this.role === 'ADMIN' || this.role === 'SUPER_USER') return jobs;
                    else {
                        angular.forEach(jobs, function (job) {
                            console.log('job '+job);
                            if (job.qualification.indexOf(self.profile.education.degree) !== -1) {
                                userViewableJobs.push(job);
                            }
                        })
                    }
                    return userViewableJobs;
                }
                this.canApplyForJob = function(job){
                  return job.canBeApplied() && !this.hasAlreadyAppliedForJob(job);
                }
                this.hasAlreadyAppliedForJob = function(job){
                    return this.appliedJob.indexOf(job) !=-1;
                }

                this.applyForJob = function (job) {
                    this.appliedJob.push(job);
                };
                this.unApplyJob = function (job) {
                    this.appliedJob.splice(this.appliedJob.indexOf(job), 1);
                };

            };
        }).factory('Job', function () {
            return function (job) {
                this.id = job.id;
                this.active = job.active;
                this.profile = job.profile;
                this.qualification = job.qualification;
                this.status = job.status;
                this.canBeApplied = function(){
                    return this.active && this.status === 'OPEN';
                }
            };
        }).factory('Profile', function () {
            return function (profile) {
                this.email = profile.email;
                this.education = profile.education;
            };
        });

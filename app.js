angular.module('githubApp', [])
  .controller('MainController', ['$http', function($http) {
    var vm = this;
    vm.repositories = [];
    vm.error = '';

    vm.searchRepositories = function() {
      if (vm.username) {
        $http.get('https://api.github.com/users/' + vm.username + '/repos')
          .then(function(response) {
            vm.repositories = response.data;
            vm.error = '';
          })
          .catch(function(error) {
            console.error('Error fetching repositories:', error);
            vm.repositories = [];
            vm.error = 'Error fetching repositories. Please try again.';
          });
      } else {
        vm.repositories = [];
        vm.error = 'Please enter a GitHub username.';
      }
    };
  }]);

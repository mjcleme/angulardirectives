var app = angular.module('app', []);

app.controller('mainCtrl', mainCtrl);

function mainCtrl ($scope) {
  $scope.users = [{
    name: 'Mikey Murphy',
    avatarUrl: 'https://pbs.twimg.com/profile_images/621816592519688192/U8sbRNik.jpg'
  }];
  $scope.addNew = function (user) {
    $scope.users.push({
      name: user.name,
      avatarUrl: user.url
    });
    user.name = '';
    user.url = '';
  };
}


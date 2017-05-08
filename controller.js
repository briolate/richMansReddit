var app = angular.module('redditModule');

app.controller('redditCtrl', function($scope, $http) {
  $scope.posts = [];

  $scope.getReddit = function(subreddit) {

  $http({
    method: 'GET',
    url: 'http://www.reddit.com/r/' + subreddit.replace(/ /g,"_") + '.json',
    params: {
      limit: '52'
    }
  }).then(function successCallback(response) {
    console.log(response.data.data.children);
    $scope.posts = response.data.data.children;
  }, function(error) {
    console.log(error);
    })
  };

  $scope.getImg = function(src) {
    if (src === "" || src==="self" || src==="default") {
      return 'images/noImage.jpg';
    } else {
      return src;
    }
  }
});

app.directive('redditPost', function() {
  return {
    restrict: 'E',
    templateUrl: 'redditPost.html',
    replace: false
  }
});

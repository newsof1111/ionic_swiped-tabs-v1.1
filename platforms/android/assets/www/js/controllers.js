angular.module('starter.controllers', [])



.controller('ChatsCtrl', function($scope, Chats, $ionicSlideBoxDelegate,$window, $ionicGesture) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
 $scope.Height = $window.innerHeight-30;
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
   $scope.nextSlide = function() {
    $ionicSlideBoxDelegate.next();
  };
})

.controller('chats1Ctrl', function($scope, Chats, $ionicSlideBoxDelegate,$window) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
 $scope.Height = $window.innerHeight-30;
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
   $scope.nextSlide = function() {
    $ionicSlideBoxDelegate.next();
  };
});
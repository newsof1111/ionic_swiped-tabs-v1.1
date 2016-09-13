// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
	document.addEventListener("deviceready", function onDeviceReady(w) {
    // Should work on Andriod
    if(StatusBar && statusbarTransparent) {
        // Enable translucent statusbar
        statusbarTransparent.enable();

        // Get the bar back
        StatusBar.show();
    }
    // iOS only
    else if (StatusBar) {
        // Get the bar back
        StatusBar.show();
    }
}, false);
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  .state('chatsu', {
      url: '/chatsu',
      views: {
        
      '': {
        templateUrl: 'templates/chats.html',
        controller: 'chats1Ctrl'
      }
      }
   
  })

  .state('chats', {
      url: '/chats',
      views: {
        '': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        },
		'b': {
        templateUrl: 'templates/chats.html',
        controller: 'chats1Ctrl'
      }
      }
   
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/chats');

});

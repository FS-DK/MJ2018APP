// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.indkvartering', {
    url: '/indkvartering',
    views: {
      'menuContent': {
        templateUrl: 'templates/indkvartering.html'
      }
    }
  })
  .state('app.bespisning', {
      url: '/bespisning',
      views: {
        'menuContent': {
          templateUrl: 'templates/bespisning.html'
        }
      }
    })
	 .state('app.underholdning', {
      url: '/underholdning',
      views: {
        'menuContent': {
          templateUrl: 'templates/underholdning.html'
        }
      }
    })
	 .state('app.kontakt', {
      url: '/kontakt',
      views: {
        'menuContent': {
          templateUrl: 'templates/kontakt.html'
        }
      }
    })
    .state('app.bus', {
      url: '/bus',
      views: {
        'menuContent': {
          templateUrl: 'templates/bus.html'
        }
      }
    })
.state('app.turnering', {
      url: '/turnering',
      views: {
        'menuContent': {
          templateUrl: 'templates/turnering.html'
        }
      }
    })
  .state('app.single', {
    url: '/playlists/:playlistId',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/kontakt');
});
// Add to index.js or the first page that loads with your app.
// For Intel XDK and please add this to your app.js.

document.addEventListener('deviceready', function () {
  // Enable to debug issues.
  // window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
  
  var notificationOpenedCallback = function(jsonData) {
    console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
  };

  window.plugins.OneSignal
    .startInit("9733519c-b68f-4fde-a3a8-cc1551313e83")
    .handleNotificationOpened(notificationOpenedCallback)
    .endInit();
}, false);

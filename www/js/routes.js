angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



      .state('tabsController.aUDIO', {
    url: '/audio',
    views: {
      'tab3': {
        templateUrl: 'templates/audio.html',
        controller: 'aUDIOCtrl'
      }
    }
  })

  .state('tabsController.vIDEO', {
    url: '/video',
    views: {
      'tab2': {
        templateUrl: 'templates/video.html',
        controller: 'vIDEOCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('tabsController.hOME', {
    url: '/home',
    views: {
      'tab1': {
        templateUrl: 'templates/home.html',
        controller: 'hOMECtrl'
      }
    }
  })

  .state('tabsController.eVENT', {
    url: '/event',
    templateUrl: 'templates/event.html',
    controller: 'eVENTCtrl'
  })

  .state('tabsController.tRANSPORT', {
    url: '/transport',
    views: {
      'tab5': {
        templateUrl: 'templates/transport.html',
        controller: 'tRANSPORTCtrl'
      }
    }
  })

  .state('aBOUTUS', {
    url: '/about',
    templateUrl: 'templates/aboutus.html',
    controller: 'aBOUTUSCtrl'
  })

    .state('contact_us', {
      url: '/contact_us',
      templateUrl: 'templates/contact_us.html',
      controller: 'contact_usCtrl'
    })
    .state('weekly', {
      url: '/weekly',
      templateUrl: 'templates/weekly.html',
      controller: 'weeklyCtrl'
    })

$urlRouterProvider.otherwise('/page1/home')



});

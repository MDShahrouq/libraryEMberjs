/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ember2',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',

       firebase: {
     apiKey: "AIzaSyDSlcSqcur4OUp15vSGTiQ8OMvbBEYchEE",
    authDomain: "emberdb-66ac4.firebaseapp.com",
    databaseURL: "https://emberdb-66ac4.firebaseio.com",
    storageBucket: "emberdb-66ac4.appspot.com",
    messagingSenderId: "1087788928306"
    },


// <script src="https://www.gstatic.com/firebasejs/3.6.7/firebase.js"></script>
// <script>
//   // Initialize Firebase
//   var config = {
//     apiKey: "AIzaSyDSlcSqcur4OUp15vSGTiQ8OMvbBEYchEE",
//     authDomain: "emberdb-66ac4.firebaseapp.com",
//     databaseURL: "https://emberdb-66ac4.firebaseio.com",
//     storageBucket: "emberdb-66ac4.appspot.com",
//     messagingSenderId: "1087788928306"
//   };
//   firebase.initializeApp(config);
// </script>
    // if using ember-cli-content-security-policy
    contentSecurityPolicy: {
      'script-src': "'self' 'unsafe-eval' apis.google.com",
      'frame-src': "'self' https://*.firebaseapp.com",
      'connect-src': "'self' wss://*.firebaseio.com https://*.googleapis.com"
    },


    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
     ENV.APP.LOG_ACTIVE_GENERATION = true;
     ENV.APP.LOG_TRANSITIONS = true;
     ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
     ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};

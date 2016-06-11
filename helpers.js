// Helpers

// Global dependencies
var Twitter = require('twitter');

var Helpers = {};

Helpers.getTwitterClient = function() {
  // Add your keys and access token credentials for your Twitter
  // developer application.
  // TODO: Move these values to environment variables. It's very
  // insecure to keep these values in your source code.
  var client = new Twitter({
    consumer_key: 'a5kwzI2fhike1AYwANB0MGfuK',
    consumer_secret: 'tGrdFPEu4XYZBL94KXpAwKTCKEFxeqbsMQHha81QtXMoI0J8rK',
    access_token_key: '741679664821866496-s4IVWkPEpLuLDoUzib1VTZGaaM1iAet',
    access_token_secret: 'Y5jYAk4OMo0oEcrTJkAMi9csjWqMB96XoJAN5jtmT2pxH'
  });

  return client;
};

module.exports = Helpers;

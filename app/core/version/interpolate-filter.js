// Refactor Angular component structure
// Refactor Angular component structure
// Refactor Angular component structure
// Refactor Angular component structure
// Refactor Angular component structure
// Refactor Angular component structure
// Refactor Angular component structure
// Refactor Angular component structure
// Refactor Angular component structure
// Refactor Angular component structure
// Refactor Angular component structure
'use strict';

angular.module('myApp.version.interpolate-filter', [])

.filter('interpolate', ['version', function(version) {
  return function(text) {
    return String(text).replace(/\%VERSION\%/mg, version);
  };
}]);

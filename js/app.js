'use strict';
function ready(fn) {
  if (document.readState != 'loading') {
    fn();
  }else {
    document.addEventListener('DOMContentLoaded', fn);
  }
}

var app = function() {
  console.log('yass queen');
}

ready(app);

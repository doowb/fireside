(function() {

  var baseUrl = fromFile() ? '../fireside/src/' : 'http://firside.io/app/';
  window.fireside = window.fireside || {};
  window.fireside.config = window.fireside.config || {};
  window.fireside.config.container = window.fireside.config.container || document;

  inject();

  function init() {
    yepnope([
      { test: window.jQuery, nope : [baseUrl + 'jquery-1.10.2.min.js'] },
      { test: window.Firebase, nope: ['http://cdn.firebase.com/v0/firebase.js'] },
      { test: window.FirebaseSimpleLogin, nope: ['https://cdn.firebase.com/v0/firebase-simple-login.js'] },
      { test: window.angular, nope: ['https://ajax.googleapis.com/ajax/libs/angularjs/1.0.8/angular.min.js'] },
      { test: window.angularFire, nope: ['https://cdn.firebase.com/libs/angularfire/0.3.0/angularfire.min.js'] },
      { 
        test: window.fireside.app, 
        nope: [
          baseUrl + 'app.js',
          baseUrl + 'templates.js',
          baseUrl + 'controllers/main.js',
          baseUrl + 'controllers/comments.js'
        ], 
        complete: complete 
      }
    ]);
  }

  function complete() {
    var frag = document.createDocumentFragment();
    var temp = document.createElement('div');
    temp.setAttribute('ng-include', '');
    temp.setAttribute('src', "'templates/main'");
    frag.appendChild(temp);
    fireside.config.container.appendChild(frag);

    angular.bootstrap(fireside.config.container, ['fireside.app']);
  }

  function fromFile() {
    var file = false;
    switch(window.location.protocol) {
      case 'http:':
      case 'https:':
        break;
      case 'file:':
        file = true;
        break;
      default:
        break;
    }
    return file;
  }

  function inject() {
    var script = document.createElement('script');
    script.setAttribute('src', 'http://cdnjs.cloudflare.com/ajax/libs/yepnope/1.5.4/yepnope.min.js');
    script.setAttribute('type', 'text/javascript');
    document.getElementsByTagName('head')[0].appendChild(script);

    if(script.readyState && script.onload !== null) {
      script.onreadystatechange = function() {
        if(script.readyState === 'loaded' || script.readyState === 'complete') {
          script.onreadystatechange = null;
          init();
        }
      };
    } else {
      script.onload = init;
    }
  }

})();
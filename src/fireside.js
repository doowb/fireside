(function() {

  function init() {
    yepnope([
      { test: window.Firebase, nope: ['http://static.firebase.com/v0/firebase.js'] },
      { test: window.FirebaseSimpleLogin, nope: ['https://cdn.firebase.com/v0/firebase-simple-login.js'], complete: complete }
    ]);
  }

  function complete() {
    console.log('Firebase loaded...');
  }

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


})();
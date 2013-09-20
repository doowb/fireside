(function() {

  window.fireside = window.fireside || {};
  window.fireside.config = window.fireside.config || {};
  window.fireside.config.container = window.fireside.config.container || document;

  var frag = document.createDocumentFragment();
  var temp = document.createElement('iframe');
  temp.setAttribute('seamless', 'true');
  temp.setAttribute('src', fireside.config.baseUrl + 'templates/main.html?baseUrl=' + fireside.config.baseUrl);
  frag.appendChild(temp);
  fireside.config.container.appendChild(frag);

})();
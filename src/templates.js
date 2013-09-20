angular.module('fireside.app').run(['$templateCache', function($templateCache) {

  $templateCache.put('templates/main',
    "<div class=\"well\" ng-controller=\"CommentController\">\n" +
    "  <form class=\"form-inline\">\n" +
    "    Your name: <input type=\"text\" ng-model=\"username\">\n" +
    "  </form>\n" +
    "  <div ng-cloak=\"\" ng-repeat=\"comment in comments\">\n" +
    "    <em>{{comment.from}}: </em>{{comment.comment}}\n" +
    "  </div><br>\n" +
    "  <form class=\"form-inline\" ng-submit=\"addComment()\">\n" +
    "    <input type=\"text\" ng-model=\"comment\" placeholder=\"Add Comment...\">\n" +
    "    <button class=\"btn\" type=\"submit\">\n" +
    "      <i class=\"icon-reply\"> Send</i>\n" +
    "    </button>\n" +
    "  </form>\n" +
    "</div>"
  );

}]);

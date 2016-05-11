//= require ./helper

(function ($) {
  'use strict';

  if (window.isGoogleAnalyticsOn) {
    (function (i, s, o, g, r, a, m) {
      i.GoogleAnalyticsObject = o;
      i[o] || (i[o] = function () {
        (i[o].q = i[o].q || []).push(arguments)
      });
      i[o].l = +new Date;
      a = s.createElement(g);
      m = s.getElementsByTagName(g)[0];
      a.src = r;
      m.parentNode.insertBefore(a, m)
    })(window, document, 'ga', 'script', '//www.google-analytics.com/analytics.js');

    ga('create', 'UA-76058076-1', 'auto');
    ga('send', 'pageview');

    // GA Event Tracking
    $(document).ready(function () {
      $('a.ga-event, button.ga-event').on('click', function () {
        if (window.console)
          window.console.log($(this).data('event-category') + ', ' + $(this).data('event-action') + ', ' + $(this).data('event-label'));

        window.ga('send', {
          hitType: 'event',
          eventCategory: $(this).data('event-category'),
          eventAction: $(this).data('event-action'),
          eventLabel: $(this).data('event-label')
        });
      });
    });
  }
})(window.jQuery);

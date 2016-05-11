//= require ./helper

(function ($) {
  'use strict';

  if (window.isGoogleAnalyticsOn) {
    (function (G, o, O, g, l, e) {
      G.GoogleAnalyticsObject = O;
      G[O] = (G[O] || function () {
        (G[O].q = G[O].q || []).push(arguments);
      });
      G[O].l = +new Date();
      l = o.createElement(g);
      e = o.getElementsByTagName(g)[0];
      l.src = ('https:' == o.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/analytics.js';
      e.parentNode.insertBefore(l, e);
    })(window, document, 'ga', 'script');

    window.ga('create', window.googleAnalyticsTrackingId, 'auto');
    window.ga('send', 'pageview');

    // GA Event Tracking
    $(document).ready(function () {
      $('a.ga-event, button.ga-event').on('click', function () {
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

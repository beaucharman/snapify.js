/**
 * snapify.js
 * ========================================================================
 * @version 1.0 | June 12th 2013
 * @author  Beau Charman | @beaucharman | http://www.beaucharman.me
 * @link    https://github.com/beaucharman/snapify.js
 * @license MIT license
 *
 * Usage
 * $('.page--menu).snapify();
 * ======================================================================== */
;(function ($) {
  'use strict';

  $.fn.snapify = function () {

    return this.each(function () {

      var $snapify = $(this).addClass('snapify');
      var $offsetTop = $snapify.offset().top;

      var snapifyToggle = function () {

        if ($(window).scrollTop() > $offsetTop) {
          $snapify
            .css({'position': 'fixed', 'top':0})
            .addClass('snapify--fixed');
        } else {
          $snapify
            .css({'position': 'absolute', 'top': $offsetTop})
            .removeClass('snapify--fixed');
        }
      };

      snapifyToggle();

      $(window).scroll(function () {
        snapifyToggle();
      });
    });
  };
})(jQuery);

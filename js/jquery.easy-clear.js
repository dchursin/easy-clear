/**
 * easy-clear.js jQuery Plugin
 * -----------------------------------------------
 * Author: Copyright (c) 2016 Dmitry Chursin
 * Version: 1.0.0
 * License: MIT
 * -----------------------------------------------
 */
(function($) {
  $.fn.extend({
    easyclear: function(options) {
      var
        control,
        controls,
        showButton,
        tabIndex,
        clearButton,
        defaults = {
          top: 30,
          right: 40,
          returnFocus: false,
          showOnLoad: false,
          imagePath: 'img/close16x16.png',
          imageHeight: 16,
          imageWidth: 16
        },
        settings = $.extend({}, defaults, options);
      controls = $(this);
      showButton = function(control) {
        clearButton = '<img src="' + settings.imagePath + '" class="input-clear" alt="close"/>';
        control.after(clearButton);
        control.next().css({
          position: 'relative',
          right: settings.right,
          top: settings.top,
          height: settings.imageHeight,
          width: settings.imageWidth
        });
        if (!settings.showOnLoad)
          control.next().addClass('hide');
        control.next().bind('click.easyclear', function(e) {
          control.val('');
          $(this).addClass('hide');
          if (settings.returnFocus) {
            control.focus();
          }
          e.preventDefault();
        });
        control.bind('keyup.easyclear', function() {
          if ($(this).val().length >= 1) {
            $(this).next().removeClass('hide');
          } else {
            $(this).next().addClass('hide');
          }
        });
      }
      return controls.each(function(index) {
        showButton($(this));
      });
    }
  });
})(jQuery);
(function($) {

  $(document).ready(function() {
    djp.attachClickEvents();
    djp.showTheThingWithTheThing();
  });

  /**
   * Main site object to contain functions/variables.
   */
  var djp = {

    /**
     * Displays the necessary site things.
     */
    showTheThingWithTheThing: function() {
      $('.hero-unit').delay(250).animate({opacity: 1}, 1000);
      $('#footer').delay(500).animate({opacity: 1}, 500, function() {
        // Sexy list animation for the footer.
        $('#footer li').each(function(i) {
          $(this).delay(i * 500).animate({marginTop: 0, opacity: 1}, 500);
        });
      });

    },

    /**
     * Attach any click events we need.
     */
    attachClickEvents: function() {

      // Visualize graph click event.
      $('.view-graph').click(function(e) {

        e.preventDefault();
        $('#graph-container').animate({height: 180}, 1500);

        // Loop through progress bars to animate them.
        $.each($('#graph-container .progress .bar'), function(i, val) {
          var width = $(val).width();
          $(val).width(0);
          $(val).delay((i + 1) * 250).animate({width: width}, 1500);
        });

      });
    }

  }

}(jQuery));

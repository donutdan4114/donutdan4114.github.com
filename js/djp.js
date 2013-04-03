(function ($) {

  /**
   * On click, show the graph thingy.
   */
  $('.view-graph').click(function (e) {

    e.preventDefault();
    $('#graph-container').animate({height: 180}, 1500);

    /**
     * Loop through and set bar widths.
     */
    $.each($('#graph-container .progress .bar'), function (i, val) {
      var width = $(val).width();
      $(val).width(0);
      $(val).delay((i + 1) * 250).animate({width: width}, 1500);
    });

  });

}(jQuery));

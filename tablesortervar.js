/**
 * @file
 * jQuery Tablesorter
 */

(function ($) {
  Drupal.behaviors.tablesorter = {
    attach: function (context, settings) {
     	try{
	$("#tablesorter-filter").tablesorter({widgets: ["filter"]});
        $(".tablesorter").tablesorter({widgets: ["zebra"]});
	}
	catch(e)
	{
	}
    }
  };
})(jQuery);

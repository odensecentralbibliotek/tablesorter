/**
 * @file
 * jQuery Tablesorter
 */

(function ($) {
  Drupal.behaviors.tablesorter = {
    attach: function (context, settings) {
     	try{
	$(".tablesorter").tablesorter({widgets: ["filter","zebra"]});
	}
	catch(e)
	{
	}
    }
  };
})(jQuery);

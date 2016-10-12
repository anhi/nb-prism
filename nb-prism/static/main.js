/* -*- coding: utf-8 -*-
* ----------------------------------------------------------------------------
* Distributed under the terms of the MIT License.
*
* A Jupyter notebook extension to support Prism.js - based syntax highlighting
* -----------------------------------------------------------------------------
*/

define([
        'require',
        'jquery',
	      'base/js/events'
], function(require, $, events) {

/* Render any code contained in the cell */
var render_cell = function(cell) {
	var codes = cell.element.find('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code');
	if (codes) {
		for (var i=0; i<codes.length; ++i) {
			Prism.highlightElement(codes[i]);
		}
	}
}

function setup() {
	require([require.toUrl('./prism/prism.js')], function() {
	  $('head').prepend('<link rel="stylesheet" href=' + require.toUrl("./prism/prism.css") + ' class="prismcss" />');
		
		events.on("rendered.MarkdownCell", function(event, data) {
			render_cell(data.cell)
	  });
	});
}

setup.load_ipython_extension = setup;

return setup;
});


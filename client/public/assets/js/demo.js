(function($) {
    "use strict"
    var href = window.location.href;
	var dir = href.substring(0, href.lastIndexOf('/'));
	var file = href.substring(href.lastIndexOf('/')+1);
    $("#rtl-link").attr("href", dir+"/rtl/"+file);
    $('.icon-cog').on('click', function() {
        $(".layout-options").toggleClass("show");
    });
})(jQuery);
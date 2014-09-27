(function($) {

  $.fn.sharpness = function( options ) {

    // Establish our default settings
    var settings = $.extend({
      browsers: null,
      attribute: 'data-hires',
      start: null,
      complete: null
    }, options);

    return this.each( function() {
      // start everthing
      if ( $.isFunction( settings.start ) ) {
        settings.start.call( this );
      }

      if (settings.browsers === null) {
        prepare_swap($(this), settings);
      } else {
        // check if we got everything
        if (typeof bowser === 'undefined') {
          console.log("you need to include bowser https://github.com/ded/bowser");
        } else if(typeof window.bodyclasses === 'undefined') {
          console.log("you need to include demography https://github.com/andrezimpel/demography");
        } else {
          match = false;
          classversion = window.bodyclasses.split(" ");

          $(classversion).each(function(index){
            brws_class = classversion[index];
            result = jQuery.inArray( brws_class, settings.browsers );
            if (result !== -1) {
              match = true;
            }
          });

          if (!match) {
            prepare_swap($(this), settings);
          }
        }
      }

      // set the callback
      if ( $.isFunction( settings.complete ) ) {
        settings.complete.call( this );
      }
    });
  }
}(jQuery));

// function
function prepare_swap(elem, settings) {
  $this = elem;
  var hires_src = $this.attr(settings.attribute);
  var src = $this.attr("src");
  var img = $this;

  var img_call = $.ajax(hires_src)
  .success(function() {

    // swap image if the hires alternative is available
    swap_hires_image(img, hires_src, src);
  });
}

// replace images
function swap_hires_image(element, hires_src, src) {
  $(element).attr("src", null);
  $(element).attr("src", hires_src);
  $(element).attr("data-original-src", src);
}

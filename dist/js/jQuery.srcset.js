/* ========================================================================
  * jquery srcset plugin srcset.js v0.0.1
  * URL
  * ========================================================================
  * Copyright 2011-2015 Andre Zimpel, http://www.andrezimpel.com
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  * ======================================================================== */


  +function ($) {
  'use strict';

  // srcset CLASS DEFINITION
  // ======================

  var srcset = function (element, options) {
    this.options        = options
    this.$element       = $(element)

    this.init();

    // shitty, allow resizing
    var my_this = this;
    $(window).resize(function(){
      my_this.init();
    });
  }

  srcset.VERSION  = '0.0.1'

  srcset.DEFAULTS = {
    ajax: true
  }

  srcset.prototype.init = function () {
    // display densitiy
    var density = this.detect_display_densitiy();
    var window_width = this.get_current_window_width();

    // check if the image has the srcset attribute
    if (this.$element.attr("srcset")) {
      this.choose_image_and_apply_it();
    }
  }

  srcset.prototype.choose_image_and_apply_it = function () {
    var that = this;
    var $img = this.$element;
    var srcset = this.$element.attr("srcset").trim();
    var src_images = srcset.split(",");
    var sets = [];

    // prepare data for each set
    $(src_images).each(function(){
      var string = this.trim();
      var set = string.split(" ");

      // adjust the set to be cool
      set = that.parse_set(set);

      // push it into the sets
      sets.push(set);
    });

    // filter sets to find the matching set
    var matches = sets.filter(this.filter_sets);

    // get last match since we have a convetion of sorting by width and resolution
    var match = matches[0];

    // if there is a match
    if (match !== undefined) {
      // swap image src
      this.prepare_swap_src_with_match(match);
    } else {

      // use original image
      var original_src = $img.attr("data-original-src");

      if (original_src !== undefined) {
        this.swap_src_with_match($img, original_src);
      }
    }
  }

  srcset.prototype.filter_sets = function (set) {
    var density = false;
    var width = false;

    // set data
    var set_density = parseInt(set[2]);
    var set_width = parseInt(set[1]);

    // check for display density
    if (window.density == set_density) {
      density = true;
    }

    // check for size
    if (window.width <= set_width) {
      width = true;
    }

    // match the set
    if (density === true && width === true) {
      return set;
    }
    if (density === true && isNaN(set_width)) {
      return set;
    }
    if (isNaN(set_density) && width === true) {
      return set;
    }
  }

  srcset.prototype.prepare_swap_src_with_match = function (match) {
    var $img = this.$element;
    var match_path = match[0];

    if (this.options.ajax) {
      // validate image
      var img_call = $.ajax(img_src)
      .success(function() {
        this.swap_src_with_match($img, match_path);
      });
    } else {
      this.swap_src_with_match($img, match_path);
    }
  }

  srcset.prototype.swap_src_with_match = function ($img, url) {
    var current_url = $img.attr("src");
    var original_src = $img.attr("data-original-src");

    // move src to data-original-src
    if (original_src === undefined) {
      $img.attr("data-original-src", current_url);
    }

    // edit src with match path
    $img.attr("src", url);
  }



  // ------------------------------------------------



  // helper

  srcset.prototype.detect_display_densitiy = function () {
    var density = window.devicePixelRatio;
    window.density = density;

    return density;
  }

  srcset.prototype.get_current_window_width = function () {
    var window_width = $(window).outerWidth(true);
    window.width = window_width;

    return window_width;
  }

  srcset.prototype.parse_set = function (set) {
    var src = set[0];
    var width = null;
    var density = null;
    var conditions = set.slice();

    // remove path
    conditions.splice(0, 1);

    // apply conditions
    $(conditions).each(function() {
      var condition = this;

      // width
      if (condition.indexOf("w") > -1) {
        width = condition.replace("w", "");
      }

      // density
      if (condition.indexOf("x") > -1) {
        density = condition.replace("x", "");
      }
    });

    // apply updated conditions to set
    set[1] = width;
    set[2] = density;

    return set;
  }

  // :/
  srcset.prototype.update = function () {
    console.log("coming soon");
  }


  // srcset PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('srcset')
      var options = $.extend({}, srcset.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('srcset', (data = new srcset(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.update) data.update(_relatedTarget)
    })
  }

  var old = $.fn.srcset
  $.fn.srcset             = Plugin
  $.fn.srcset.Constructor = srcset


  // srcset NO CONFLICT
  // =================

  $.fn.srcset.noConflict = function () {
    $.fn.srcset = old
    return this
  }

  }(jQuery);

sharpness
==========

sharpness is a small script to replace images with hi-res images to beautify the web.



## do it
<pre>
bower install sharpness
</pre>

## quick start

Four quick start options are available:

- [download the latest release](https://github.com/andrezimpel/sharpness/archive/master.zip).
- clone the repo: `git clone https://github.com/andrezimpel/sharpness.git`.
- install with [bower](http://bower.io): `bower install sharpness`.


## usage

### simple usage

just include the following scripts:

```html
<script src="http://code.jquery.com/jquery-1.9.0.js"></script>
<script src="path/to/bower_components/sharpness/sharpness.js"></script>
<script src="... others"></script>
```

then run:

```js
$('[data-hires]').sharpness();
```

### browser based usage
```html
<script src="http://code.jquery.com/jquery-1.9.0.js"></script>
<script src="path/to/bower_components/bowser/bowser.js"></script>
<script src="path/to/bower_components/sharpness/demography.js"></script>
<script src="path/to/bower_components/sharpness/sharpness.js"></script>
<script src="... others"></script>
```

then run:

```js
$('[data-hires]').sharpness({
  browsers: ['msie8', 'msie9', 'mobile']
});
```

this will exclude IE8, IE9, and mobile devices.


## options
the following options are available
```js
$('[data-hires]').sharpness({
  // all browsers set by demography, eg. msie, msie9, firefox32, ...
  browsers: null // ['msie8', 'msie9', 'mobile']
  // the attribute with the hi-res image path
  attribute: 'data-hires'
  // callack function after all images have been replaced
  complete: null // function() {...}
});
```


<!-- browsers
attribute
complete -->


## creators

**andre zimpel**

- <https://twitter.com/andrezimpel>
- <https://github.com/andrezimpel>

hit me up if you want to join!


## copyright and license

code and documentation copyright 2011-2014 andre zimpel. code released under [the MIT license](LICENSE).

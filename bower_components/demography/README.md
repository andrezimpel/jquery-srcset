demography
==========

demography is a small script to add browser data to the body.

it uses [bowser](https://github.com/ded/bowser) to detect browsers and adds the current browser plus version to the body tag as a class.

## do it
<pre>
bower install demography
</pre>

## quick start

Four quick start options are available:

- [download the latest release](https://github.com/andrezimpel/demography/archive/master.zip).
- clone the repo: `git clone https://github.com/andrezimpel/demography.git`.
- install with [bower](http://bower.io): `bower install demography`.


## usage
```html
<script src="http://code.jquery.com/jquery-1.9.0.js"></script>
<script src="path/to/bower_components/bowser/bowser.js"></script>
<script src="path/to/bower_components/demography/demography.js"></script>
<script src="... others"></script>
```
demography will automatically add classes to the body tag via jQuery.

here is the result (Safari 7):


```html
<body class="safari safari7">
```

you well be able to use those classes in your css files or to run browser specific scripts after document ready


## Creators

**Andre Zimpel**

- <https://twitter.com/andrezimpel>
- <https://github.com/andrezimpel>

Hit me up if you want to join!


## Copyright and license

Code and documentation copyright 2011-2014 Andre Zimpel. Code released under [the MIT license](LICENSE). Docs released under [Creative Commons](docs/LICENSE).

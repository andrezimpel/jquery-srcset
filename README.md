jquery.srcset
==========

use srcset in each and every browser today. display responsive and hi-res images.



## do it
<pre>
bower install jquery.srcset
</pre>

## quick start

Three quick start options are available:

- [download the latest release](https://github.com/andrezimpel/jquery-srcset/archive/master.zip).
- clone the repo: `git clone https://github.com/andrezimpel/jquery-srcset.git`.
- install with [bower](http://bower.io): `bower install jquery.srcset`.

## info
jquery-srcset behaves like srcset should. it extends the functionality (width and density combined) of Safari on Mac and iOS. last but not least it add's support to older browsers, like that one a company recently killed. if you want to know more about srcset hit [this link](http://www.smashingmagazine.com/2013/08/21/webkit-implements-srcset-and-why-its-a-good-thing/) and read a nice article by smashing magazine.


## usage

### simple usage

just include the following scripts:

```html
<script src="http://code.jquery.com/jquery-1.9.0.js"></script>
<script src="/path/to/bower_components/jquery-srcset/jquery.srcset.js"></script>
<script src="... others"></script>
```

the image tag should look like this:
```html
<img src="/path/to/image.jpg"
     srcset="/path/to/image-mobile.jpg 320w 1x,
             /path/to/image-mobile@2x.jpg 320w 2x">
```

then run:

```js
$('[srcset]').srcset();
```

that's it.


## options
the following options are available
```js
$('[srcset]').srcset({
  // check if the image is available
  ajax: true // default: true
});
```


## creator

**andre zimpel**

- <https://twitter.com/andrezimpel>
- <https://github.com/andrezimpel>

hit me up if you want to join!


## copyright and license

code and documentation copyright 2011-2014 andre zimpel. code released under [the MIT license](LICENSE).

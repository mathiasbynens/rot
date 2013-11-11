# rot [![Build status](https://travis-ci.org/mathiasbynens/rot.png?branch=master)](https://travis-ci.org/mathiasbynens/rot) [![Dependency status](https://gemnasium.com/mathiasbynens/rot.png)](https://gemnasium.com/mathiasbynens/rot)

_rot_ is a JavaScript library that performs rotational letter substitution. It can be used to shift any ASCII letters in the input string by a given number of positions in the alphabet. To ROT-13 the string `'abc'`, for example:

## Installation

Via [npm](http://npmjs.org/):

```bash
npm install rot
```

Via [Bower](http://bower.io/):

```bash
bower install rot
```

Via [Component](https://github.com/component/component):

```bash
component install mathiasbynens/rot
```

In a browser:

```html
<script src="rot.js"></script>
```

In [Narwhal](http://narwhaljs.org/), [Node.js](http://nodejs.org/), and [RingoJS](http://ringojs.org/):

```js
var rot = require('rot');
```

In [Rhino](http://www.mozilla.org/rhino/):

```js
load('rot.js');
```

Using an AMD loader like [RequireJS](http://requirejs.org/):

```js
require(
  {
    'paths': {
      'rot': 'path/to/rot'
    }
  },
  ['rot'],
  function(rot) {
    console.log(rot);
  }
);
```

## API

### `rot.version`

A string representing the semantic version number.

### `rot(text, [ n = 13 ])`

This function takes a string of text and shifts any ASCII letters in the input string by `n` positions in the alphabet (to the right). The optional `n` argument defaults to `13`. It can be any number from `0` to `26`. (Other numeric values are accepted too, but they’re not useful; e.g. ROT-1337 is the same as ROT-11.)

```js
// ROT-13 is the default
rot('abc');
// → 'nop'

rot('abc', 13);
// → 'nop'
```

To decrypt rotational ciphertext for which the `n` value is known, simply pass `26 - n` or just `-n` as the second parameter to `rot()`. For example, to decrypt ROT-5:

```js
rot('Ymnx xywnsl nx jshwduyji zxnsl WTY-5.', 26 - 5);
// → 'This string is encrypted using ROT-5.'

rot('Ymnx xywnsl nx jshwduyji zxnsl WTY-5.', -5);
// → 'This string is encrypted using ROT-5.'
```

### Using the `rot` binary

To use the `rot` binary in your shell, simply install _rot_ globally using npm:

```bash
npm install -g rot
```

After that you will be able to perform simple rotation encryption from the command line:

```bash
$ rot 'foo bar baz'
sbb one onm

$ rot -n 13 'foo bar baz'
sbb one onm
```

Read a local text file, encrypt it using ROT-5, and save the result to a new file:

```bash
$ rot -n 5 < foo.txt > foo-rot-5.txt
```

Or do the same with an online text file:

```bash
$ curl -sL "http://git.io/jH5wdg" | rot -n 5 > rot-5.txt
```

Or, the opposite — read a local file containing ROT-5 encoded text, decode it back to readable text, and save the result to a new file:

```bash
$ rot -n 21 < rot-5.txt > original.txt
```

See `rot --help` for the full list of options.

## Support

_rot_ is designed to work in at least Node.js v0.10.0, Narwhal 0.3.2, RingoJS 0.8-0.9, PhantomJS 1.9.0, Rhino 1.7RC4, as well as old and modern versions of Chrome, Firefox, Safari, Opera, and Internet Explorer.

## Unit tests & code coverage

After cloning this repository, run `npm install` to install the dependencies needed for he development and testing. You may want to install Istanbul _globally_ using `npm install istanbul -g`.

Once that’s done, you can run the unit tests in Node using `npm test` or `node tests/tests.js`. To run the tests in Rhino, Ringo, Narwhal, and web browsers as well, use `grunt test`.

To generate the code coverage report, use `grunt cover`.

## Author

| [![twitter/mathias](http://gravatar.com/avatar/24e08a9ea84deb17ae121074d0f17125?s=70)](http://twitter.com/mathias "Follow @mathias on Twitter") |
|---|
| [Mathias Bynens](http://mathiasbynens.be/) |

## License

_rot_ is available under the [MIT](http://mths.be/mit) license.

/*! http://mths.be/rot v0.1.0 by @mathias | MIT license */
;(function(root) {

	// Detect free variables `exports`
	var freeExports = typeof exports == 'object' && exports;

	// Detect free variable `module`
	var freeModule = typeof module == 'object' && module &&
		module.exports == freeExports && module;

	// Detect free variable `global`, from Node.js or Browserified code,
	// and use it as `root`
	var freeGlobal = typeof global == 'object' && global;
	if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal) {
		root = freeGlobal;
	}

	/*--------------------------------------------------------------------------*/

	var lowercase = 'abcdefghijklmnopqrstuvwxyz';
	var uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
	var regexLowercase = /[a-z]/;
	var regexUppercase = /[A-Z]/;

	var rot = function(string, n) {
		if (n == null) {
			// use ROT-13 by default
			n = 13;
		}
		n = Number(n);
		string = String(string);
		if (n == 0) {
			return string;
		}
		if (n < 0) { // decode instead of encode
			n += 26;
		}
		var length = string.length; // note: no need to account for astral symbols
		var index = -1;
		var result = '';
		var character;
		var currentPosition;
		var shiftedPosition;
		while (++index < length) {
			character = string.charAt(index);
			if (regexLowercase.test(character)) {
				currentPosition = lowercase.indexOf(character);
				shiftedPosition = (currentPosition + n) % 26;
				result += lowercase.charAt(shiftedPosition);
			} else if (regexUppercase.test(character)) {
				currentPosition = uppercase.indexOf(character);
				shiftedPosition = (currentPosition + n) % 26;
				result += uppercase.charAt(shiftedPosition);
			} else {
				result += character;
			}
		}
		return result;
	};

	rot.version = '0.1.0';

	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if (
		typeof define == 'function' &&
		typeof define.amd == 'object' &&
		define.amd
	) {
		define(function() {
			return rot;
		});
	}	else if (freeExports && !freeExports.nodeType) {
		if (freeModule) { // in Node.js or RingoJS v0.8.0+
			freeModule.exports = rot;
		} else { // in Narwhal or RingoJS v0.7.0-
			for (var key in rot) {
				rot.hasOwnProperty(key) && (freeExports[key] = rot[key]);
			}
		}
	} else { // in Rhino or a web browser
		root.rot = rot;
	}

}(this));

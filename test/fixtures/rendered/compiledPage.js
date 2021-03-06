const path = require('path');

module.exports = {
  getCompiledPage(workingDir) {
    return {
      "index": "\n<!DOCTYPE html>\n\n<html>\n<head>\n  <title>Default lede project</title>\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n  <meta content=\"IE=edge\" http-equiv=\"X-UA-Compatible\" />\n  <meta charset=\"UTF-8\" />\n  <meta name=\"description\" content=\"Starter lede project\" />\n  \n  <link rel=\"stylesheet\" type=\"text/css\" href=\"globalStyles.css\">\n  \n</head>\n<body>\n\n  <script type=\"text/javascript\" src=\"globalScripts.js\"></script>\n  \n  \n</body>\n</html>\n",
      "scripts": {"file":"globalScripts.js","data":"\n// GLOBALS\nrequire=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require==\"function\"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error(\"Cannot find module '\"+o+\"'\");throw f.code=\"MODULE_NOT_FOUND\",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require==\"function\"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({\"proj2/bar.js\":[function(require,module,exports){\n\"use strict\";\n\nmodule.exports = {\n  word: \"fancy\"\n};\n\n},{}],\"proj5/globalScript.js\":[function(require,module,exports){\n'use strict';\n\nvar x = require('proj2/bar.js');\nconsole.log(x.word);\n\n},{\"proj2/bar.js\":\"proj2/bar.js\"}]},{},[]);\n\n// BITS\nrequire=(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require==\"function\"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error(\"Cannot find module '\"+o+\"'\");throw f.code=\"MODULE_NOT_FOUND\",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require==\"function\"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({\"proj2/bar.js\":[function(require,module,exports){\n\"use strict\";\n\nmodule.exports = {\n  word: \"fancy\"\n};\n\n},{}],\"proj5/globalScript.js\":[function(require,module,exports){\n'use strict';\n\nvar x = require('proj2/bar.js');\nconsole.log(x.word);\n\n},{\"proj2/bar.js\":\"proj2/bar.js\"}]},{},[]);\n\n"},
      "styles": {
        "file": "globalStyles.css",
        "data": "\n/* GLOBALS */\n\n/* BITS */\n\n"
      },
      cachePath: path.resolve(workingDir, '.ledeCache'),
    }
  }
};


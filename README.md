# [range](https://github.com/jsmini/range)

[![](https://img.shields.io/badge/Powered%20by-jslib%20range-brightgreen.svg)](https://github.com/yanhaijing/jslib-range)
[![license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/jsmini/range/blob/master/LICENSE)
[![CI](https://github.com/jsmini/range/actions/workflows/ci.yml/badge.svg?branch=master)](https://github.com/jsmini/range/actions/workflows/ci.yml)
[![npm](https://img.shields.io/badge/npm-0.2.0-orange.svg)](https://www.npmjs.com/package/@jsmini/range)
[![NPM downloads](http://img.shields.io/npm/dm/@jsmini/range.svg?style=flat-square)](http://www.npmtrends.com/@jsmini/range)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/jsmini/range.svg)](http://isitmaintained.com/project/jsmini/range 'Percentage of issues still open')

A range function for JavaScript, generates numbers/letters within a given boundary, with an option to specify the step length.

English | [简体中文](./README-zh_CN.md)

## Environment Support

unit test ensure it supports the following environments.

| IE/Edge | Chrome | Firefox | Safari | Opera | IOS | Android | Node  |
| ------- | ------ | ------- | ------ | ----- | --- | ------- | ----- |
| 6+      | 23+    | 4+      | 6+     | 10+   | 5+  | 2.3+    | 0.10+ |

**Notice: builds depends on ES5. In order to support IE6-8, you should import [es5-shim](http://github.com/es-shims/es5-shim/) . See example in [demo/demo-global.html](./demo/demo-global.html)**

## Directory

```
.
├── demo
├── dist  # production code
├── doc   # document
├── src   # source code
├── test  # unit test
├── CHANGELOG.md
└── TODO.md
```

## Usage

npm installation

```bash
$ npm install --save @jsmini/range
```

Node.js

```js
var name = require('@jsmini/range').name;
```

webpack

```js
import { name } from '@jsmini/range';
```

Require.js

```js
requirejs(
  ['node_modules/@jsmini/range/dist/index.aio.js'],
  function (jsmini_range) {
    var name = jsmini_range.name;
  },
);
```

Browser

```html
<script src="node_modules/@jsmini/range/dist/index.aio.js"></script>

<script>
  var name = jsmini_range.name;
</script>
```

## Document

[API](./doc/api.md)

## Contributing Guide ![PRs welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

when initialize, install dependencies

```bash
$ npm install
```

builds your code for production to `build` folder

```bash
$ npm run build
```

run unit test. notice: borwser enviroment need to test manually. test file is in `test/browser`

```bash
$ npm test
```

change the version in package.json and README.md, add your description in CHANGELOG.md, and then release it happily.

```bash
$ npm run release
```

publish the new package to npm

```bash
$ npm publish --access=public
```

rename project. you need to edit project name when initialize project or anytime you want to rename the project . you need to rename `formName` and `toname` in file `rename.js`,which will automatically rename project name in the following files

- README.md
- package.json
- config/rollup.js
- test/browser/index.html

```bash
$ npm run rename # rename command
```

## Contributors

[contributors](https://github.com/jsmini/range/graphs/contributors)

## CHANGELOG

[CHANGELOG.md](./CHANGELOG.md)

## TODO

[TODO.md](./TODO.md)

## who is using

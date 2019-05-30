var pkg = require('../package.json');

// 兼容 range 和 @jsmini/range，@jsmini/range 替换为 jsmini_range
var name = pkg.name.replace('@', '').replace(/\//g, '_');
var version = pkg.version;

var banner = 
`/*!
 * range ${version} (https://github.com/jsmini/range)
 * API https://github.com/jsmini/range/blob/master/doc/api.md
 * Copyright 2017-${(new Date).getFullYear()} jsmini. All Rights Reserved
 * Licensed under MIT (https://github.com/jsmini/range/blob/master/LICENSE)
 */
`;

exports.name = name;
exports.banner = banner;

// CommonJS - every file is a module (by default)
// Modules - encapsulated code (only share minimum)
const names = require('./4-names');
const sayHi = require('./5-utils');
require('./7-mind-grenade');

sayHi('Travis');
sayHi(names.alice);
sayHi(names.olya);

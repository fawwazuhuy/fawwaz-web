const { dirname, join } = require('node:path');

const typescriptPackage = require.resolve('typescript/package.json');
require(join(dirname(typescriptPackage), 'lib', 'tsc.js'));

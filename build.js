const fs = require('fs');

if (!process.argv[2]) {
  console.error('Usage: npm run build -- <name>');
  process.exit(1);
}

const schemePath = 'schemes/'.concat(process.argv[2]);

if (!fs.existsSync(schemePath)) {
  console.error('Scheme doesn\'t exist');
  process.exit(1);
}

process.exit(require('cross-spawn').sync(
  'node_modules/.bin/sass',
  ['--embed-source-map', '--no-charset', '--load-path='.concat(schemePath), 'schemes/scheme.scss', 'schemes/scheme.css'],
  { stdio: 'inherit' }
).status);

const { choosePort } = require('venus-dev-utils/lib/WebpackDevServerUtils');
const clearConsole = require('venus-dev-utils/lib/clearConsole');
const executeNodeScript = require('venus-dev-utils/lib/executeNodeScript.js');
const { getEnvShortName, processArgs } = require('./env');
const paths = require('./paths');
const execa = require('execa');

const envShortName = getEnvShortName();

const DEFAULT_PORT = processArgs.get(`para:devPort:${envShortName}`);
let nodeServerHasLunched = false;
const HOST = process.env.HOST || '0.0.0.0';

const isInteractive = process.stdout.isTTY;

const cwd = () => {
  try {
    return process.env.DEV_MODE === 'true'
      ? require('pkg-dir').sync(__dirname)
      : process.cwd();

  } catch (e) {
    return process.cwd();
  }
};

const lunchNodeServer = (port) => {

  if (nodeServerHasLunched) { return; };
  if (isInteractive) {
    clearConsole();
  }
  executeNodeScript(
    'node_modules/.bin/supervisor',
    `--watch`, `${paths.appServer}`,
    `--ignore`, `${paths.appServer}`,
    `-q`,
    '--',
    'server/index.js',
    '--VENUS_WEBPACK_PORT', `${port}`
  );
  nodeServerHasLunched = true;
  
  execa('npm', ['run','build:weapp -- --watch'], {
    stdio: 'inherit',
    cwd: cwd(),
  });
};

choosePort(HOST, DEFAULT_PORT)
  .then(port => {
    if (port == null) {
      // We have not found a port.
      return;
    }
    process.env.DEV_PORT = port;
    lunchNodeServer(port);

    ['SIGINT', 'SIGTERM'].forEach((sig) => {
      process.on(sig, () => {
        process.exit();
      });
    });
  }).catch(err => {
    if (err && err.message) {
      console.log(err.message);
    }
    process.exit(1);
  });;
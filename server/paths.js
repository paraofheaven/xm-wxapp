const resolveApp = require('venus-dev-utils/lib/resolveApp.js');

module.exports = {
  appCwd: resolveApp(''),
  appPublic: resolveApp('public'),
  appPackageJson: resolveApp('package.json'),
  appSrc: resolveApp('src'),
  appServer: resolveApp('server'),
  yarnLockFile: resolveApp('yarn.lock'),
  appNodeModules: resolveApp('node_modules'),
  appParaConfig: resolveApp('para.config.js')
};

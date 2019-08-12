const _ = require('lodash');
const nconf = require('nconf');
const path = require('path');
const paths = require('./paths.js');

nconf.argv().env()
  .file({
    file: path.join(__dirname, 'environment.json')
  })
  .merge({ para: require(paths.appParaConfig) });

const processArgs = nconf;
/**
 * Indicates current process env is `production` or `development`
 */
exports.isProdEnv = () => {
  return processArgs.get('NODE_ENV') === 'production';
};

/**
 * Return short name of environment 'prod', 'dev'
 * 
 * @param {String} envName 'prod', 'production'
 */
exports.getEnvShortName = (envName) => {
  envName = envName || processArgs.get('NODE_ENV');
  return _.includes(['prod', 'production'], envName) ? 'prod' : 'dev';
};

exports.processArgs = processArgs;
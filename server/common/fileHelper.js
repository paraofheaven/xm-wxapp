const path = require('path');
const async = require('async');
const _ = require('lodash');
const { walk } = require('walk');

const defaultFileFilter = function (item) {
  let basename = path.basename(item);
  return basename === '.' || basename[0] !== '.';
};
/**
 * Copy all files within specificed folder to location.
 * @param {String|Array} filesFromCwd filesFrom location base
 * @param {Function} fileFilter 
 * @param {Object} walkFolderOpts 
 */
exports.walkFolder = (filesFromCwd, fileFilter = defaultFileFilter, walkFolderOpts = {}) => {
  if (_.isString(filesFromCwd)) {
    filesFromCwd = [filesFromCwd];
  }
  const asyncQueue = [];
  const items = [];

  filesFromCwd.forEach((cwd) => {
    asyncQueue.push(((workDir) => (callback) => {
      walk(workDir, _.merge({ followLinks: false }, walkFolderOpts))
        .on('file', (root, fileStats, next) => {
          let absPath = path.join(root, fileStats.name);
          if (fileFilter(absPath)) { items.push(absPath); }
          next();
        })
        .on('end', () => { callback(null, items); });
    })(cwd));
  });

  return new Promise((resolve, reject) => {
    async.series(asyncQueue, (err) => {
      if (err) {
        reject(err);
      } else {
        resolve(items);
      }
    });
  });
};

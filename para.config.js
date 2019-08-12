const projectVirtualPath = 'para/xmapp';

module.exports = {
  // angular, react, inferno, agility, default is angular
  scaffoldType: 'wxapp',

  projectVirtualPath: projectVirtualPath,

  // The version 
  version: Date.now(),

  devHost: {
    "dev": "http://localhost",
    "prod": "http://localhost"
  },
  devPort: {
    "dev": 9880,
    "prod": 9880
  }
};
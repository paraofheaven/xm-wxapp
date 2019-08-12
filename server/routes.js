const cors = require('cors');
module.exports = (app) => {
  // For angular only
  app.use('/api', cors(), require('./api'));
};

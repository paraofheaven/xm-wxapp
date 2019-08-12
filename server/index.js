const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const path = require('path');
const fs = require('fs-extra');
const parseUrl = require('parseurl')
const favicon = require('serve-favicon');
const webpackDevServerUtils = require('venus-dev-utils/lib/WebpackDevServerUtils');
const chalk = require('chalk');
const paths = require('./paths.js');
const { getEnvShortName,processArgs, } = require('./env');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(favicon(path.join(__dirname, 'favicon.ico')));

// local variables for all views 'prod', 'dev'
const envShortName = getEnvShortName();
const host = process.env.HOST || '0.0.0.0';
const serverPort = processArgs.get(`para:devPort:${envShortName}`) || 3000;
const protocol = processArgs.get('HTTPS') === 'true' ? 'https' : 'http';
const appName = require(paths.appPackageJson).name;
const { choosePort, printInstructions, prepareUrls } = webpackDevServerUtils;

choosePort(host, serverPort).then((expressPort) => {
  http
    .createServer(app)
    .listen(expressPort, host, (err) => {
      if (err) {
        return console.log(err);
      }
      const urls = prepareUrls(protocol, host, expressPort);

      printInstructions(appName, urls);
      console.log(
        `${chalk.bold.gray('=> Note xmApp')}: server is running on ${chalk.cyan(urls.localUrlForBrowser)}`
      );
    });
});

require('./routes.js')(app);

module.exports = app;
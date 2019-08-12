const Exception = require('./Exception.js');

module.exports = class UnknownException extends Exception {
  constructor(message, status, code, data) {
    super(message, status, code, data);
    this.name = 'UnknownException';
  }
};

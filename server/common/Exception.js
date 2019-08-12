class Exception extends Error {

  constructor(message, status, code, data) {
    super(message);
    // Capturing stack trace, excluding constructor call from it.
    Error.captureStackTrace(this, this.constructor);

    this.name = 'Exception';
    this.status = status || 500;
    this.code = code || 'unknown.default.exception';
    this.data = data || {};
    this.i18n = {};
  }

  loadMessage(locale) {
    locale = locale || 'en_us';
    try {
      this.i18n = require('../constants/errors/' + locale);
    } catch (e) {
      this.i18n = require('../constants/errors/en_us');
    }
  }

  getMessage() {
    let localeMessage = this.i18n[this.code];
    let result = {
      code: this.code,
      message: this.message,
      data: this.data
    };
    if (localeMessage) result.message = localeMessage;
    return result;
  }
}

module.exports = Exception;


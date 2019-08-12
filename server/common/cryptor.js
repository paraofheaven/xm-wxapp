const crypto = require('crypto');

const TOKEN_LENGTH = 32;

const _encryptDES = (cryptkey, iv, cleardata) => {
  const encipher = crypto.createCipheriv('aes-256-cbc', cryptkey, iv);
  let encoded = encipher.update(cleardata, 'utf8', 'base64');
  encoded += encipher.final('base64');
  return encoded;
};

const _decryptDES = (cryptkey, iv, secretdata) => {
  const decipher = crypto.createDecipheriv('aes-256-cbc', cryptkey, iv);
  let decoded = decipher.update(secretdata, 'base64', 'utf8');
  decoded += decipher.final('utf8');
  return decoded;
};

module.exports = {
  encryptDES: (data, secret) => {
    const cryptkey = crypto.createHash('sha256').update(secret).digest();
    return _encryptDES(cryptkey, "1234567890000000", data);
  },
  decryptDES: (data, secret) => {
    const cryptkey = crypto.createHash('sha256').update(secret).digest();
    return _decryptDES(cryptkey, '1234567890000000', data);
  },
  md5: (data) => {
    return crypto.createHash('md5')
      .update(JSON.stringify(data))
      .digest('hex');
  },
  randomBytes: () => {
    return crypto.randomBytes(TOKEN_LENGTH).toString('hex');
  },
  /**
   * randomString() =>"XwPp9xazJ0ku5CZnlmgAx2Dld8SHkAeT"
   * randomString(7)=>"xqm5wXX"
   * random string with fixed length
   * @param  {Number} length length
   * @return {String}
   */
  randomString: (length) => {
    length = length || 32;
    const charsNumbers = '0123456789';
    const charsLower = 'abcdefghijklmnopqrstuvwxyz';
    const charsUpper = charsLower.toUpperCase();
    const chars = charsNumbers + charsLower + charsUpper;
    let string = '';

    while (string.length < length) {
      let bf = crypto.randomBytes(length);
      for (var i = 0; i < bf.length; i++) {
        let index = bf.readUInt8(i) % chars.length;
        string += chars.charAt(index);
      }
    }
    return string;
  },
  random: (min, max) => {
    if (arguments.length == 1) {
      max = min;
      min = 0;
    }
    let range = max - min;
    let rand = Math.random();
    return min + Math.round(rand * range);
  }
};

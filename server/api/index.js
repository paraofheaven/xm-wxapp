const express = require('express');
const router = express.Router();

router.post('/home', function (req, res) {
  res.json({
    code: '0000',
    data: {
      a: 1,
    },
    message: 'success'
  });
});

router.get('/detail', function (req, res) {
  res.json({
    code: '0000',
    data: {
      detail: {
        b: 333,
      },
    },
    message: 'success'
  });
});

module.exports = router;
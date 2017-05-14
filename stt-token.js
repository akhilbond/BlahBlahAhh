'use strict';

var express = require('express');
var router = express.Router(); // eslint-disable-line new-cap
var watson = require('watson-developer-cloud');

// set up an endpoint to serve speech-to-text auth tokens

// For local development, replace username and password or set env properties
var sttConfig = {
  version: 'v1',
  url: 'https://stream.watsonplatform.net/speech-to-text/api',
  username: "4e3153cb-3011-4179-8dcc-a1be03bc12da",
  password: "Qf5WVYhQ7Jsf"
};

var sttAuthService = watson.authorization(sttConfig);

router.get('/token', function(req, res) {
  sttAuthService.getToken({ url: sttConfig.url }, function(err, token) {
    if (err) {
      console.log('Error retrieving token: ', err);
      res.status(500).send('Error retrieving token');
      return;
    }
    res.send(token);
  });
});

module.exports = router;

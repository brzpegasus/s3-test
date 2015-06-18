'use strict';

var s3 = require('s3');

var client = s3.createClient({
  s3Options: {
    accessKeyId: 'your s3 key',
    secretAccessKey: 'your s3 secret'
  }
});

var list = client.listObjects({
  s3Params: {
    Bucket: 'ed-playground',
    Prefix: 'flywheel'
  }
});

list.on('error', function(err) {
  console.error('Error retrieving data from S3', err);
});

list.on('progress', function() {
  console.log('progress', list.progressAmount, list.progressTotal);
});

list.on('data', function(data) {
  console.log(data);
});

list.on('end', function() {
  console.log('Successfully retrieved data from S3');
});

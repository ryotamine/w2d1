// var request = require('request');

// request('https://sytantris.github.io/http-examples/', function(err, response, body) {
//   if (err) throw err;
//   console.log('Response Status Code:', response.statusCode);
// });

// require `request` and the Node `fs` (filesystem) module
var request = require('request');
var fs = require('fs');

request.get('https://sytantris.github.io/http-examples/future.jpg')
       .on('error', function (err) {
         throw err;
       })
       .on('response', function (response) {
         console.log('Response Status Message:', response.statusMessage,
                     'Response Headers:', response.headers['content-type']);
       })
       .pipe(fs.createWriteStream('./future.jpg'));
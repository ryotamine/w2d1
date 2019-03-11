// import 'https' module
var https = require('https');

function getAndPrintHTML () {

  // link host and path
  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  // set buffer empty
  var buf = "";

  // stream HTTP response
  https.get(requestOptions, function (response) {

    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    // invoke callback
    response.on('data', function (data) {
      buf += data;
      console.log(buf);
    });

    // end callback
    response.on('end', function() {
      console.log('Response stream complete.');
    });

  });

}

// call function
getAndPrintHTML();
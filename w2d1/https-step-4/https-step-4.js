// import 'https' module
var https = require('https');

function getHTML (options, callback) {

  // set buffer empty
  var buf = "";

  // stream HTTP response
  https.get(requestOptions, function (response) {

    // set encoding of received data to UTF-8
    response.setEncoding('utf8');

    // invoke callback
    response.on('data', function (data) {
      buf += data;
      printHTML(buf);
    });

    // end callback
    response.on('end', function() {
      console.log('Response stream complete.');
    });

  });

}

function printHTML (html) {
  console.log(html);
}

// link host and path
var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step4.html'
};

// call getHTML function
getHTML(requestOptions, printHTML);
var url = "http://mylogger.io/log"; 

function log(message) {
    //Send an HTTP request(fake of course)
    console.log(message);
}

module.exports.log = log;

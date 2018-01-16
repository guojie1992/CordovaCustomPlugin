var exec = require('cordova/exec');

exports.coolMethod1 = function (arg0, success, error) {
    exec(success, error, 'Echo', 'coolMethod1', [arg0]);
};


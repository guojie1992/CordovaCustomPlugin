cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
  {
    "id": "test.test",
    "file": "plugins/test/www/test.js",
    "pluginId": "test",
    "clobbers": [
      "cordova.plugins.test"
    ]
  }
];
module.exports.metadata = 
// TOP OF METADATA
{
  "cordova-plugin-whitelist": "1.3.3",
  "test": "1.0.0"
};
// BOTTOM OF METADATA
});
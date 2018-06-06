var os = require('os');

function timeFormat() {
  var uptime = os.uptime();
  console.log('Uptime: ~', convertTime(uptime));
}

function convertTime(ms) {
  var h = Math.floor(ms / 3600);
  var m = Math.floor(ms % 3600 / 60);
  var s = Math.floor(ms % 3600 % 60);
  return { h: h, m: m, s: s};
};

exports.print = timeFormat;
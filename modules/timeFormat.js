var os = require('os');

function timeFormat() {
  var uptime = os.uptime();
  console.log('Uptime: ~', convertTime(uptime));
}

function convertTime(s) {
  var h = Math.floor(s / 3600);
  var m = Math.floor(s % 3600 / 60);
  var s = Math.floor(s % 3600 % 60);
  return { h: h, m: m, s: s};
};

exports.print = timeFormat;
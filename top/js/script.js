// Header Home Banner


var div = document.getElementById("countdown");
var hour = document.getElementById("hours");
var minute = document.getElementById("minutes");
var second = document.getElementById("seconds");

setInterval(function () {
  var toDate = new Date();
  var tomorrow = new Date();
  tomorrow.setHours(24, 0, 0, 0);
  var diffMS = tomorrow.getTime() / 1000 - toDate.getTime() / 1000;
  var diffHr = Math.floor(diffMS / 3600);
  diffMS = diffMS - diffHr * 3600;
  var diffMi = Math.floor(diffMS / 60);
  diffMS = diffMS - diffMi * 60;
  var diffS = Math.floor(diffMS);
  var hours = diffHr < 10 ? "0" + diffHr : diffHr;
  minutes = (diffMi < 10 ? "0" + diffMi : diffMi);
  seconds = (diffS < 10 ? "0" + diffS : diffS);
  hour.innerHTML = hours;
  minute.innerHTML = minutes;
  second.innerHTML = seconds;
}, 1000);

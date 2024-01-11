var d = new Date();
var mon = d.getMonth() + 1;
var year = d.getFullYear();
var date = d.getDate();
if (date < 10) {
  date = "0" + date;
}
if (mon < 10) {
  mon = "0" + mon;
}

console.log(mon + "-" + year + "-" + date);

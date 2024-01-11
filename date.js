var date = new Date();
var day = date.getDay();
var daylist = ["sunday", "monday", "tuesday", "wed", "thu", "fri", "sat"];
console.log("today is :" + daylist[day] + ".");
var hur = date.getHours();
var min = date.getMinutes();
var sec = date.getSeconds();

var hours = hur >= 12 ? hur - 12 : hur;
var h1 = hur >= 12 ? "pm" : "am";
if (hur === 0 && h1 === "pm") {
  if (min === 0 && sec === 0) {
    hur = 12;
    h1 = "noon";
  } else {
    hur = 12;
    h1 = "pm";
  }
}
if (hur === 0 && h1 === "am") {
  if (min === 0 && sec === 0) {
    hur = 12;
    h1 = "midnight";
  } else {
    hur = 12;
    h1 = "am";
  }
}

console.log("current time :" + hours + h1 + ":" + min + ":" + sec);

// Displaying current time at the top of the page.
var today = moment().format("dddd LL");
$("#currentDay").append(today);

var currentTime = moment().format("LT");
$("#currentTime").append(currentTime);

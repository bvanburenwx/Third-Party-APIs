console.log(userHour);
// Displaying current time at the top of the page.
var today = moment().format("dddd LL");
$("#currentDay").append(today);

var currentTime = moment().format("LT");
$("#currentTime").append(currentTime);

// add a listener to the save button and save time in local storage
$(".saveBtn").on("click", function () {
    
    var list = $(this).siblings(".task").val();
    var timeStamp = $(this).parent().attr("id");

    localStorage.setItem(timeStamp, list);
})

// Getting time from local storage to show time on screen upon refresh
$("#8AM .task").val(localStorage.getItem("8AM"));
$("#9AM .task").val(localStorage.getItem("9AM"));
$("#10AM .task").val(localStorage.getItem("10AM"));
$("#11AM .task").val(localStorage.getItem("11AM"));
$("#12PM .task").val(localStorage.getItem("12PM"));
$("#1PM .task").val(localStorage.getItem("1PM"));
$("#2PM .task").val(localStorage.getItem("2PM"));
$("#3PM .task").val(localStorage.getItem("3PM"));
$("#4PM .task").val(localStorage.getItem("4PM"));
$("#5PM .task").val(localStorage.getItem("5PM"));

var hour8 = 8;
var hour9 = 9;
var hour10 = 10;
var hour11 = 11;
var hour12 = 12;
var hour13 = 13;
var hour14 = 14;
var hour15 = 15;
var hour16 = 16;
var hour17 = 17;

var userHour = moment().hour();
console.log(userHour);

if (userHour < hour10) {
    $("#10AM-textarea").addClass("future");
}   else if (userHour > hour10) {
    $("#10AM-textarea").addClass("past");
}   else if (userHour = hour10) {
    $("#10AM-textarea").addClass("present");
}

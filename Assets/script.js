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

// variable created to compare the hours to the users curren time.
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

// 10AM
if (userHour < hour10) {
    $("#10AM-textarea").addClass("future");
}   else if (userHour > hour10) {
    $("#10AM-textarea").addClass("past");
}   else if (userHour = hour10) {
    $("#10AM-textarea").addClass("present");
}

// 8AM
if (userHour < hour8) {
    $("#8AM-textarea").addClass("future");
}   else if (userHour > hour8) {
    $("#8AM-textarea").addClass("past");
}   else if (userHour = hour8) {
    $("#8AM-textarea").addClass("present");
}

// 9AM
if (userHour < hour9) {
    $("#9AM-textarea").addClass("future");
}   else if (userHour > hour9) {
    $("#9AM-textarea").addClass("past");
}   else if (userHour = hour9) {
    $("#9AM-textarea").addClass("present");
}

// 11AM
if (userHour < hour11) {
    $("#11AM-textarea").addClass("future");
}   else if (userHour > hour11) {
    $("#11AM-textarea").addClass("past");
}   else if (userHour = hour11) {
    $("#11AM-textarea").addClass("present");
}

// 12PM
if (userHour < hour12) {
    $("#12PM-textarea").addClass("future");
}   else if (userHour > hour12) {
    $("#12PM-textarea").addClass("past");
}   else if (userHour = hour12) {
    $("#12PM-textarea").addClass("present");
}

// 1PM
if (userHour < hour13) {
    $("#1PM-textarea").addClass("future");
}   else if (userHour > hour13) {
    $("#1PM-textarea").addClass("past");
}   else if (userHour = hour13) {
    $("#1PM-textarea").addClass("present");
}

// 2PM
if (userHour < hour14) {
    $("#2PM-textarea").addClass("future");
}   else if (userHour > hour14) {
    $("#2PM-textarea").addClass("past");
}   else if (userHour = hour14) {
    $("#2PM-textarea").addClass("present");
}

// 3PM
if (userHour < hour15) {
    $("#3PM-textarea").addClass("future");
}   else if (userHour > hour15) {
    $("#3PM-textarea").addClass("past");
}   else if (userHour = hour15) {
    $("#3PM-textarea").addClass("present");
}

// 4PM
if (userHour < hour16) {
    $("#4PM-textarea").addClass("future");
}   else if (userHour > hour16) {
    $("#4PM-textarea").addClass("past");
}   else if (userHour = hour16) {
    $("#4PM-textarea").addClass("present");
}

// 5PM
if (userHour < hour17) {
    $("#5PM-textarea").addClass("future");
}   else if (userHour > hour17) {
    $("#5PM-textarea").addClass("past");
}   else if (userHour = hour17) {
    $("#5PM-textarea").addClass("present");
}


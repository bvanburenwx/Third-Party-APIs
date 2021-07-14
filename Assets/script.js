// Displaying current time at the top of the page.
var today = moment().format("dddd LL");
$("#currentDay").append(today);

var currentTime = moment().format("LT");
$("#currentTime").append(currentTime);

// add a listener to the save button
$(".save-btn").on("click", function () {
    
    console.log(this);
    var text = $(this).siblings(".task").val();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
})

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
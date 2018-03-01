// Initialize Firebase
var config = {
  apiKey: "AIzaSyB8Y0Dy3-yPE35_ZOilH-omSe2ooMqLRfU",
  authDomain: "employeetracker-c6938.firebaseapp.com",
  databaseURL: "https://employeetracker-c6938.firebaseio.com",
  projectId: "employeetracker-c6938",
  storageBucket: "",
  messagingSenderId: "20142424528"
};
firebase.initializeApp(config);

var name = "";
var role = "";
var startDate = "";
var rate = 0;
var monthsWorked = 0;
var totalBilled = 0;

$("#submit").on('click', function(event) {
  event.preventDefault();
  name = $("#employee-name").val().trim();
  role = $("#role").val().trim();
  startDate = $("#start-date").val().trim();
  rate = $("#monthly-rate").val().trim();
  // monthsWorked = 
  // totalBilled = monthsWorked * rate;
  var newRow = $("<tr>");
  var nameCell = $("<td>");
  nameCell.text(name);
  nameCell.append(newRow);
  var roleCell = $("<td>");
  roleCell.text(role);
  roleCell.append(newRow);
  var startCell = $("<td>");
  startCell.text(startDate);
  startCell.append(newRow);
  var rateCell = $("<td>");
  rateCell.text(rate);
  rateCell.append(newRow);
  var monthsWorkedCell = $("<td>");
  monthsWorkedCell.text(monthsWorked);
  monthsWorkedCell.append(newRow);
  var totalCell = $("<td>");
  totalCell.text(totalBilled);
  totalCell.append(newRow);

  $("#employee-container").prepend();
})
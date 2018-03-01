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

var database = firebase.database();

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

  database.ref().push({
    name: name,
    role: role,
    startDate: startDate,
    rate: rate,
    dateAdded: firebase.database.ServerValue.TIMESTAMP
  });

  // monthsWorked = 
  // totalBilled = monthsWorked * rate;

  //container row
  var newRow = $("<tr>");

  //name 
  var nameCell = $("<td>");
  nameCell.text(name);
  newRow.append(nameCell);

  //role 
  var roleCell = $("<td>");
  roleCell.text(role);
  newRow.append(roleCell);

  //start date
  var startCell = $("<td>");
  startCell.text(startDate);
  newRow.append(startCell);

  //months worked
  var monthsWorkedCell = $("<td>");
  monthsWorkedCell.text(monthsWorked);
  newRow.append(monthsWorkedCell);

  //rate
  var rateCell = $("<td>");
  rateCell.text(rate);
  newRow.append(rateCell);

  //total
  var totalCell = $("<td>");
  totalCell.text(totalBilled);
  newRow.append(totalCell);

  $("#employee-container").prepend(newRow);

});
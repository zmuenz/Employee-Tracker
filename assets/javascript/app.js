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

});

database.ref().on("child_added", function(snapshot) {
  var sv = snapshot.val();

  var newRow = $("<tr>");
  //name 
  var nameCell = $("<td>");
  nameCell.text(sv.name);
  newRow.append(nameCell);

  //role 
  var roleCell = $("<td>");
  roleCell.text(sv.role);
  newRow.append(roleCell);

  //start date
  var startCell = $("<td>");
  startCell.text(moment(sv.startDate).format('L'));
  newRow.append(startCell);

  //months worked
  var start = moment(sv.startDate);
  var now = moment();
  monthsWorked = now.diff(start, 'months');
  var monthsWorkedCell = $("<td>");
  monthsWorkedCell.text(monthsWorked);
  newRow.append(monthsWorkedCell);

  //rate
  var rateCell = $("<td>");
  rateCell.text("$"+sv.rate);
  newRow.append(rateCell);

  //total
  totalBilled = monthsWorked * sv.rate;
  var totalCell = $("<td>");
  totalCell.text("$"+totalBilled);
  newRow.append(totalCell);

  $("#employee-container").append(newRow);

}, function(errorObject) {
  console.log("Errors handled: " + errorObjecxt.code);
});
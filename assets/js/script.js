// !########### For Date ###########
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];
const d = new Date();
let day = d.getDate();
let month = months[d.getMonth()];
let year = d.getFullYear();

const date = document.getElementById("date");
date.innerText = `${day + "-" + month + "-" + year}`;

$.ajax({
  url: "https://geolocation-db.com/jsonp",
  jsonpCallback: "callback",
  dataType: "jsonp",
  success: function (location) {
    if(location.city){
      $("#location").html(location.city);
    }
  },
});



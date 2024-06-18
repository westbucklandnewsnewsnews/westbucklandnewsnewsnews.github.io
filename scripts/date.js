const dateObj = new Date();
const month   = dateObj.getUTCMonth() + 1;
const day     = dateObj.getUTCDate();
const year    = dateObj.getUTCFullYear();
var newDate = year + "/" + month + "/" + day;
var newDate = `${year}/${month}/${day}`;
const pMonth        = month.toString().padStart(2,"0");
const pDay          = day.toString().padStart(2,"0");
const newPaddedDate = `${year}/${pMonth}/${pDay}`;

const date = document.getElementById("date")

date.textContent = newPaddedDate
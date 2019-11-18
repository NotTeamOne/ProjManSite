function next()
{
  var elem = document.getElementById("Month");
  if (elem.innerHTML == "November<br>2019") elem.innerHTML = "December<br>2019";
  else if (elem.innerHTML == "October<br>2019") elem.innerHTML = "November<br>2019";
  else elem.innerHTML = "December<br>2019";
}

function prev()
{
  var elem = document.getElementById("Month");
  if (elem.innerHTML == "November<br>2019") elem.innerHTML = "October<br>2019";
  else if (elem.innerHTML == "December<br>2019") elem.innerHTML = "November<br>2019";
  else elem.innerHTML = "October<br>2019";
}

// October<br>2019
// November<br>2019
// December<br>2019

//test functions

function nextT()
{
  var elem = document.getElementById("Month");
  if (elem.innerHTML == "November 2019") elem.innerHTML = "December 2019";
  else if (elem.innerHTML == "October 2019") elem.innerHTML = "November 2019";
  else elem.innerHTML = "December 2019";
}

function prevT()
{
  var elem = document.getElementById("Month");
  if (elem.innerHTML == "November 2019") elem.innerHTML = "October 2019";
  else if (elem.innerHTML == "December 2019") elem.innerHTML = "November 2019";
  else elem.innerHTML = "October 2019";
}

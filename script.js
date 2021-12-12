let Male = [
  { day: "Sunday", Name: "Kwasi" },
  { day: "Monday", Name: "Kwadwo" },
  { day: "Tuesday", Name: "Kwabena" },
  { day: "Wednesday", Name: "Kwaku" },
  { day: "Thursday", Name: "Yaw" },
  { day: "Friday", Name: "Kofi" },
  { day: "Saturday", Name: "Kwame" },
];

let Female = [
  { day: "Sunday", Name: "Akosua" },
  { day: "Monday", Name: "Adwoa" },
  { day: "Tuesday", Name: "Abenaa" },
  { day: "Wednesday", Name: "Akua" },
  { day: "Thursday", Name: "Yaa" },
  { day: "Friday", Name: "Afua" },
  { day: "Saturday", Name: "Ama" },
];

let button = document.querySelector("#submit");

function validate(day, month, year) {
  if (year % 4 == 0 && month == 2) {
    if (day > 29) {
      return false;
    } else return true;
  }
  if (month == 2 && year % 4 != 0) {
    if (day > 28) {
      return false;
    } else return true;
  }
  var today = new Date();
  var d = new Date(year + "/" + month + "/" + day);
  if (d > today) {
    return false;
  } else return true;
}
button.addEventListener("click", function () {
  let error = 0;
  let day = document.getElementById("date").value;
  let month = document.getElementById("month").value;
  let year = document.getElementById("year").value;
  let err = document.getElementById("error");
  let male = document.getElementById("male")
  let female = document.getElementById('female')

  if (day <= 0 || day > 31) {
    error = 1;
  } else {
    if (month <= 0 || month > 12) {
      error = 1;
    } else {
      if (year <= 0 || year > 2021) {
        error = 1;
      }
    }
  }
  if (error == 1) {
    err.style.color = "red";
    err.innerHTML = "Date is invalid!";
  } else {
    if (validate(day, month, year)) {
      var d = new Date(year + "/" + month + "/" + day);
      var akan = d.getDay();
      var akanName
      let gender = ""
      if(male.checked){
          gender = "male"
      }
      else if(female.checked){
          gender="female"
      }
      if (gender == "male") {
        err.style.color = "green";
        akanName = Male[akan];
        err.innerHTML =
          "Heyy, Your akan name is <b>" +
          akanName.Name +
          "</b> because you were born on a <b>" +
          akanName.day;
      } else if (gender == "female") {
        err.style.color = "green";
        akanName = Female[akan];
        err.innerHTML =
          "Heyy, Your akan name is <b>" +
          akanName.Name +
          "</b> because you were born on a <b>" +
          akanName.day;
      } else {
        err.innerHTML = "You did not enter gender";
        err.style.color = "red";
      }
    } else {
      err.style.color = "red";
      err.innerHTML = "Date is invalid!";
    }
  }
});

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

let button = document.querySelector("submit");
let result = document.getElementById("age");


function validate () {
      let day =0;
      let month =0;
      let year =0;
    
    if (day <=0 || day >31){
    alert("Enter a valid date");
    }else if
    (month <=0 || month >12){
        alert("Enter a valid date");
    }else if
    (year <=0 || year >2021)
    {
        alert("Enter a valid date");
    }
    else{
        alert("date is valid")
    }
    document.getElementById("date").value;
    document.getElementById("month").value;
    document.getElementById("year").value;
document.getElementById("age").innerHTML =  "enter a valid date";

};

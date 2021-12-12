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


button.addEventListener("click",function() {
    let error = 0;
    let day = document.getElementById("date").value;
    let month = document.getElementById("month").value;
    let year = document.getElementById("year").value;
    let err = document.getElementById("error");
    
    if (day <=0 || day >31){
        error = 1
    }
    else{
        if(month <=0 || month >12){
            error = 1
        }
        else{
            if(year <=0 || year >2021)
            {
                error = 1
            }
        }
    }
    if (error == 1){
        err.innerHTML = "Date is invalid"
    }
    else{
        var d = new Date(year+"/"+month+"/"+day)
        var akan = d.getDay()
        
    }

});

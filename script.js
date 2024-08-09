const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth();
const currentDay = currentDate.getDate();

document.querySelector(".calender_month").innerText = months[currentDate.getMonth()];
document.querySelector(".calender_year").innerText = currentYear;


let daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
let week = document.createElement("section");
week.classList.add("calender_day-numbers-row");

for(i = 1; i <= daysInMonth; i++){
    let day = document.createElement("span");
    day.classList.add("calender_day-number");
    day.innerText = ("0" + i).slice(-2);
    (i == currentDay) && day.classList.add("calender_day-number--current");
    week.append(day);

    if(new Date(currentYear, currentMonth, i).getDay() == 6 || i == daysInMonth){
        document.querySelector(".calender_day-numbers").append(week);

        if(i != daysInMonth){
            week = document.createElement("section");
            week.classList.add("calender_day-numbers-row");
        }
    }
}

const resultDay = document.querySelector(".result-days");
const resultMonth = document.querySelector(".result-months");
const resultYear = document.querySelector(".result-year");
const submit = document.querySelector(".submit")

//INPUTS STATES
let isValid = false;
const inputDay = document.querySelector("#day");
const inputMonth = document.querySelector("#month");
const inputYear = document.querySelector("#year");

//ERROR STATES
const errorDay = document.querySelector(".error-day");
const errorMonth = document.querySelector(".error-month");
const errorYear = document.querySelector(".error-year");

const day = document.querySelector(".day");
const month = document.querySelector(".month");
const year = document.querySelector(".year");


submit.addEventListener('click', CalculateDate);
inputDay.addEventListener('input',(e) =>{
    
    if(+inputDay.value > 31){
        errorDay.textContent = "Must be a valid day";
        isValid = false;
        inputDay.classList.add("invalid-input");
        return;
    }else{
        isValid = true;
        errorDay.textContent = "";
        inputDay.classList.remove("invalid-input");
    }
    if(+inputDay.value === 0){
        isValid = false;
        errorDay.textContent = "This field is required";
        isValid = false;
        day.style.color = "red"; 
        return;
    }else{
        errorDay.textContent = "";
        day.style.color = "black";
    }
});

inputMonth.addEventListener('input',(e) =>{
    if(+inputMonth.value > 12){
        errorMonth.textContent = "Must be a valid month";
        inputMonth.classList.add("invalid-input");
        isValid = false;
        return;
    }else{
        isValid = true;
        errorMonth.textContent = "";
        inputMonth.classList.remove("invalid-input");
    }

    if(+inputMonth.value === 0){
        errorMonth.textContent = "This field is required";
        month.style.color = "red";
        return;
    }else{
        errorMonth.textContent = "";
        month.style.color = "black";
    }
});

inputYear.addEventListener('input',(e) =>{
    if(+inputYear.value > 2024){
        errorYear.textContent = "Must be in the past";
        inputYear.classList.add("invalid-input");
        return;
    }else{
        errorYear.textContent = "";
        inputYear.classList.remove("invalid-input");
    }
    if(+inputYear.value === 0){
        isValid = false;
        errorYear.textContent = "This field is required";
        isValid = false;
        year.style.color = "red";
        return;
    }else{
        errorYear.textContent = "";
        year.style.color = "black";
    }
});

function CalculateDate() {
    if(isValid){
        let birthday = `${inputMonth.value}/${inputDay.value}/${inputYear.value}`;
        console.log(birthday);
        let birthdayObj = new Date(birthday);
        let ageDiffMill = Date.now() - birthdayObj;
        let ageDate = new Date(ageDiffMill);
        let ageYears = ageDate.getUTCFullYear() - 1970;
        let ageMonth = ageDate.getUTCMonth();
        let ageDay = ageDate.getUTCDay() - 1;
        resultDay.textContent = ageDay;
        resultMonth.textContent = ageMonth;
        resultYear.textContent = ageYears;
    }//else{
      //  alert('error');
    //}
}
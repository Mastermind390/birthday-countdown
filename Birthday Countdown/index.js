const dayErrorMessage = document.getElementById('day-error-message');

const monthErrorMessage = document.getElementById('month-error-message');

const yearErrorMessage = document.getElementById('year-error-message');

const dayInputEl = document.getElementById('day-input');
const monthInputEl = document.getElementById('month-input');
const yearInputEl = document.getElementById('year-input');

const submitBtnEl = document.getElementById('submit-button');

//---------------------------------------->



//---------------------------------------->

function validateDayInput() {
    const dayInputValue  = Number(dayInputEl.value);
    const monthInputValue = Number(monthInputEl.value);
    
    if (dayInputValue === 0) {
        dayErrorMessage.style.visibility = 'visible';
        dayErrorMessage.innerHTML = 'Field is required';
    } else if (dayInputValue > 31) {
        dayErrorMessage.style.visibility = 'visible';
        dayErrorMessage.innerHTML = 'Must be 1 - 31';
    } else if (isNaN(dayInputValue)) {
        dayErrorMessage.style.visibility = 'visible';
        dayErrorMessage.innerHTML = 'Must be a number';
    } else if (dayInputValue > 30 && monthInputValue === 4) {
        dayErrorMessage.style.visibility = 'visible';
        dayErrorMessage.innerHTML = 'Must be 1-30';
        console.log('error 4')
    } else if (dayInputValue > 30 && monthInputValue === 6) {
        dayErrorMessage.style.visibility = 'visible';
        dayErrorMessage.innerHTML = 'Must be 1-30';
        console.log('error 6')
    } else if (dayInputValue > 30 && monthInputValue === 9) {
        dayErrorMessage.style.visibility = 'visible';
        dayErrorMessage.innerHTML = 'Must be 1-30';
        console.log('error 9')
    } else if (dayInputValue > 30 && monthInputValue === 11) {
        dayErrorMessage.style.visibility = 'visible';
        dayErrorMessage.innerHTML = 'Must be 1-30';
        console.log('error 11')
    } else {
        dayErrorMessage.style.visibility = 'hidden';
        dayInputEl.value = '';
    }

}

submitBtnEl.addEventListener('click', ()=>{
    validateDayInput();
})

/*
const number = 'wbhdwh';

console.log(isNaN(number))
*/

//-------------------------------->

function validateMonthInput() {
    const monthInputValue = Number(monthInputEl.value);

    if (monthInputValue === 0) {
        monthErrorMessage.style.visibility = 'visible';
        monthErrorMessage.innerHTML = 'Field is required';
    } else if (isNaN(monthInputValue)) {
        monthErrorMessage.style.visibility = 'visible';
        monthErrorMessage.innerHTML = 'Must be a number';
    } else if (monthInputValue > 12) {
        monthErrorMessage.style.visibility = 'visible';
        monthErrorMessage.innerHTML = 'Must be 1 - 12';
    } else {
        monthErrorMessage.style.visibility = 'hidden';
        monthInputEl.value = '';
    }
}

submitBtnEl.addEventListener('click', ()=>{
    validateMonthInput();
})

//-------------------------------->

function validateYearInput() {
   const yearInputValue = Number(yearInputEl.value);

   const thisYear = new Date().getFullYear();
   
   if (yearInputValue === 0) {
    yearErrorMessage.style.visibility = 'visible';
    yearErrorMessage.innerHTML = 'Field is required';
   } else if (isNaN(yearInputValue)) {
    yearErrorMessage.style.visibility = 'visible';
    yearErrorMessage.innerHTML = 'Must be a Number';
   } else if (yearInputValue > thisYear) {
    yearErrorMessage.style.visibility = 'visible';
    yearErrorMessage.innerHTML = 'Must be in the past'
   } else {
    yearErrorMessage.style.visibility = 'hidden';
    yearInputEl.value = '';
   }
}

submitBtnEl.addEventListener('click', ()=>{
    validateYearInput();
})



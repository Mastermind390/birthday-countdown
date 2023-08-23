const dayInputEl1 = document.getElementById('day-input');
const monthInputEl1 = document.getElementById('month-input');
const yearInputEl1 = document.getElementById('year-input');

const submitBtnEl1 = document.getElementById('submit-button');


function countdownToBirthday() {
    const dayValue = dayInputEl1.value;
    const monthValue = monthInputEl1.value;
    const yearValue = yearInputEl1.value;

    
    const userDay = Number(dayValue);
    const userMonth = Number(monthValue);
    const userYear = Number(yearValue);


    const userDateInput = `${userYear}-${userMonth}-${userDay}`;

    const userBirthDate = new Date(userDateInput)
    console.log(userBirthDate);
    
    const thisYear = new Date().getFullYear();
    
    if (userYear > thisYear) {
        return
    } else if (userYear === 0) {
        return
    }

    const userAge = thisYear - userBirthDate.getFullYear();
    console.log(userAge);

    const userBirthday = `${thisYear}-${userMonth}-${userDay}`;
    console.log(userBirthday);

    const thisYear2 = new Date();

    const userBirthDay = new Date(userBirthday);
    
    const second  = 1000
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const remainingTime = userBirthDay.getTime() - thisYear2.getTime();

    console.log(remainingTime)

    const month = Math.floor((remainingTime / day) / 24);
    console.log(month);

    const days = Math.floor((remainingTime /day));
    console.log(days);

    const hours = Math.floor((remainingTime % day) / hour);
    console.log(hours);

    const minutes = Math.floor((remainingTime % hour) / minute);
    console.log(minutes);

    const seconds = Math.floor((remainingTime % minute) / second);
    console.log(seconds);

    if (remainingTime < 0) {
        console.log('sorry you birthday has been celebrated');
    }
}

submitBtnEl1.addEventListener('click', ()=>{
    countdownToBirthday();
})

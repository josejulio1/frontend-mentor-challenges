const $year = document.getElementById('year');
const $month = document.getElementById('month');
const $day = document.getElementById('day');

const $yearResult = document.getElementById('year-result');
const $monthResult = document.getElementById('month-result');
const $dayResult = document.getElementById('day-result');

$day.addEventListener('input', ({ target }) => {
    const value = Number(target.value);

    if (value < 1 || value > 31) {
        target.parentElement.classList.add('error');
        return;
    } else {
        target.parentElement.classList.remove('error');
    }

    if (!$year.value || $year.classList.contains('error')) {
        return;
    }

    if (!$month.value || $month.classList.contains('error')) {
        return;
    }
    
    const year = Number($year.value);
    const month = Number($month.value);
    
    const totalDays = new Date(year, month, 0).getDate();
    if (totalDays < value) {
        $day.parentElement.classList.add('error');
        return;
    } else {
        $day.parentElement.classList.remove('error');
    }

    calculate();
});

$month.addEventListener('input', ({ target }) => {
    const value = Number(target.value);

    if (value < 1 || value > 12) {
        target.parentElement.classList.add('error');
        return;
    } else {
        target.parentElement.classList.remove('error');
    }

    if (!$year.value || $year.classList.contains('error')) {
        return;
    }

    if (!$month.value || $month.classList.contains('error')) {
        return;
    }

    const year = Number($year.value);
    const day = Number($day.value);
    
    const totalDays = new Date(year, value, 0).getDate();
    if (totalDays < day) {
        $day.parentElement.classList.add('error');
        return;
    } else {
        $day.parentElement.classList.remove('error');
    }

    calculate();
});

$year.addEventListener('input', ({ target }) => {
    const value = Number(target.value);

    const todayDate = new Date();
    if (todayDate.getFullYear() <= value) {
        target.parentElement.classList.add('error');
        return;
    } else {
        target.parentElement.classList.remove('error');
    }

    const month = Number($month.value);
    if (month < 1 || month > 12) {
        return;
    }

    const selectedDate = new Date(value, month, 0);

    if (selectedDate.getDate() < Number($day.value)) {
        $day.parentElement.classList.add('error');
        return;
    } else {
        $day.parentElement.classList.remove('error');
    }

    calculate();
});

function calculate() {
    let year = Number($year.value);
    let month = Number($month.value);
    let day = Number($day.value);
    
    const todayDate = new Date();
    const selectedDate = new Date(year, month - 1, day);

    year = todayDate.getFullYear() - selectedDate.getFullYear();
    month = todayDate.getMonth() - selectedDate.getMonth();
    day = todayDate.getDate() - selectedDate.getDate();

    if (day < 0) {
        month--;

        const lastDaysOfPreviousMonth = new Date(
            todayDate.getFullYear(),
            todayDate.getMonth(),
            0
        ).getDate();

        day += lastDaysOfPreviousMonth;
    }

    if (month < 0) {
        year--;
        month += 12;
    }
   
    $yearResult.textContent = `${year}`;
    $monthResult.textContent = `${month}`;
    $dayResult.textContent = `${day}`;
}
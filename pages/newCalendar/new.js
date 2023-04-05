const today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();
let selectedDate = null;

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
];

const monthYear = document.getElementById("month-year");
const prevBtn = document.getElementById("prev-btn");
const nextBtn = document.getElementById("next-btn");
const daysContainer = document.querySelector(".days");
const selectedDateInput = document.getElementById("selected-date");

function updateCalendar() {
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
    const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();

    monthYear.innerText = `${months[currentMonth]} ${currentYear}`;

    let daysHtml = "";

    for (let i = 0; i < firstDayOfMonth; i++) {
        daysHtml += "<div></div>";
    }

    for (let i = 1; i <= daysInMonth; i++) {
        const date = new Date(currentYear, currentMonth, i);
        const isToday = date.toDateString() === today.toDateString();
        const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
        const classNames = isToday ? "today" : isSelected ? "selected" : "";
        daysHtml += `<div class="${classNames}" data-date="${date.toISOString()}">${i}</div>`;
    }

    daysContainer.innerHTML = daysHtml;

    // Add click event listener to each day
    const days = document.querySelectorAll(".days div");
    days.forEach((day) => {
        day.addEventListener("click", () => {
            // Remove "selected" class from previously selected day, if any
            const prevSelectedDay = document.querySelector(".days div.selected");
            if (prevSelectedDay) {
                prevSelectedDay.classList.remove("selected");
            }

            // Add "selected" class to clicked day
            day.classList.add("selected");

            // Update selectedDate variable with the clicked date
            const dateStr = day.getAttribute("data-date");
            selectedDate = new Date(dateStr);

            // Update the selected date input field
            selectedDateInput.value = selectedDate.toDateString();
        });
    });
}

updateCalendar();

prevBtn.addEventListener("click", () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    updateCalendar();
});

nextBtn.addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    updateCalendar();
});

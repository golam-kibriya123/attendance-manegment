// Get current date
const today = new Date();

// Get month and year
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

// Update month and year in header
const monthYear = document.getElementById("month-year");
monthYear.innerHTML = `${getMonthName(currentMonth)} ${currentYear}`;

// Add cells to calendar
const cells = document.querySelector(".cells");
updateCells(currentMonth, currentYear);

// Move to previous month
document.getElementById("prev").addEventListener("click", () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    monthYear.innerHTML = `${getMonthName(currentMonth)} ${currentYear}`;
    updateCells(currentMonth, currentYear);
});

// Move to next month
document.getElementById("next").addEventListener("click", () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    monthYear.innerHTML = `${getMonthName(currentMonth)} ${currentYear}`;
    updateCells(currentMonth, currentYear);
});

// Get month name from index
function getMonthName(monthIndex) {
    const monthNames = [
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
        "December"
    ];
    return monthNames[monthIndex];
}

// Update cells with dates for current month and year
function updateCells(month, year) {
    // Clear cells
    cells.innerHTML = "";

    // Get first day of month
    const firstDayOfMonth = new Date(year, month, 1);

    // Get number of days in month
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Get day of week of first day of month (0 is Sunday, 1 is Monday, etc.)
    const firstDayOfWeek = firstDayOfMonth.getDay();

    // Add empty cells for days before first day of month
    for (let i = 0; i < firstDayOfWeek; i++) {
        const cell = document.createElement("div");
        cells.appendChild(cell);
    }

    // Add cells for each day of month
    for (let day = 1; day <= daysInMonth; day++) {
        const cell = document.createElement("div");
        cell.innerHTML = day;
        if (year === today.getFullYear() && month === today.getMonth() && day === today.getDate()) {
            cell.classList.add("today");
        }
        cell.addEventListener("click", () => {
            const selectedDate = new Date(year, month, day);
            document.getElementById("selected-date").value = selectedDate.toDateString();
        });
        cells.appendChild(cell);
    }
}


let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})
















// Function to calculate the current university week
function calculateWeek(startDate) {
    const currentDate = new Date();
    const oneWeek = 7 * 24 * 60 * 60 * 1000; // Milliseconds in a week
    const start = new Date(startDate);
    const diffWeeks = Math.floor((currentDate - start) / oneWeek) + 1;
    return diffWeeks;
}

// Set the current date
document.addEventListener("DOMContentLoaded", function () {
    const dateElement = document.getElementById("current-date");
    const weekElement = document.getElementById("current-week");

    // Display today's date
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-GB', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
    dateElement.textContent = formattedDate;

    // Calculate and display the current university week
    const startDate = '2024-08-05'; // Start date of university week 1
    const currentWeek = calculateWeek(startDate);
    weekElement.textContent = "University Week: " + currentWeek;
});


// JSON data for lectures
const lectures = [
    {
        "module_code": "COMP3200",
        "module_name": "Introduction to OOP",
        "day": "Monday",
        "location": "Woolf Lecture Theatre",
        "onedrive_link": "https://livekentac-my.sharepoint.com/my?referringClient=Sync&id=%2Fpersonal%2Fjd890%5Fkent%5Fac%5Fuk%2FDocuments%2FYear%201%20stuff%2FCOMP3200",
        "moodle_link": "https://moodle.kent.ac.uk/2024/course/view.php?id=876",
        "presto_link": "https://attendance.kent.ac.uk/selfregistration",
        "maps_link": "https://maps.app.goo.gl/4koBCovC59Q3QP3G6",
        "start_time": "10:00",
        "end_time": "11:00"
    },
    {
        "module_code": "COMP3280_COMP5820",
        "module_name": "HCI",
        "day": "Monday",
        "location": "Woolf Lecture Theatre",
        "onedrive_link": "https://livekentac-my.sharepoint.com/my?referringClient=Sync&id=%2Fpersonal%2Fjd890%5Fkent%5Fac%5Fuk%2FDocuments%2FYear%201%20stuff%2FCOMP3280%5F5820",
        "moodle_link": "https://moodle.kent.ac.uk/2024/course/view.php?id=263",
        "presto_link": "https://attendance.kent.ac.uk/selfregistration",
        "maps_link": "https://maps.app.goo.gl/4koBCovC59Q3QP3G6",
        "start_time": "13:00",
        "end_time": "14:00"
    },
    {
        "module_code": "COMP3280_COMP5820",
        "module_name": "HCI",
        "day": "Monday",
        "location": "Cornwallis North West Multimedia Lab 1",
        "onedrive_link": "https://livekentac-my.sharepoint.com/my?referringClient=Sync&id=%2Fpersonal%2Fjd890%5Fkent%5Fac%5Fuk%2FDocuments%2FYear%201%20stuff%2FCOMP3280%5F5820",
        "moodle_link": "https://moodle.kent.ac.uk/2024/course/view.php?id=263",
        "presto_link": "https://attendance.kent.ac.uk/selfregistration",
        "maps_link": "https://maps.app.goo.gl/iXhXeQNse9HrdmnD7",
        "start_time": "15:00",
        "end_time": "16:00"
    },
    {
        "module_code": "COMP3200",
        "module_name": "Drop In Session OOP",
        "day": "Monday",
        "location": "Marlowe PC Room 2",
        "onedrive_link": "https://livekentac-my.sharepoint.com/my?referringClient=Sync&id=%2Fpersonal%2Fjd890%5Fkent%5Fac%5Fuk%2FDocuments%2FYear%201%20stuff%2FCOMP3200",
        "moodle_link": "https://moodle.kent.ac.uk/2024/course/view.php?id=876",
        "presto_link": "https://attendance.kent.ac.uk/selfregistration",
        "maps_link": "https://maps.app.goo.gl/cF98YiSiW2BDQXxD8",
        "start_time": "16:00",
        "end_time": "17:00"
    },
    {
        "module_code": "COMP3200",
        "module_name": "Introduction to OOP",
        "day": "Tuesday",
        "location": "Woolf Lecture Theatre",
        "onedrive_link": "https://livekentac-my.sharepoint.com/my?referringClient=Sync&id=%2Fpersonal%2Fjd890%5Fkent%5Fac%5Fuk%2FDocuments%2FYear%201%20stuff%2FCOMP3200",
        "moodle_link": "https://moodle.kent.ac.uk/2024/course/view.php?id=876",
        "presto_link": "https://attendance.kent.ac.uk/selfregistration",
        "maps_link": "https://maps.app.goo.gl/4koBCovC59Q3QP3G6",
        "start_time": "09:00",
        "end_time": "10:00"
    },
    {
        "module_code": "COMP3220",
        "module_name": "Drop In Session Foundations of Computing I",
        "day": "Tuesday",
        "location": "Kennedy Seminar Room 2",
        "onedrive_link": "https://livekentac-my.sharepoint.com/my?referringClient=Sync&id=%2Fpersonal%2Fjd890%5Fkent%5Fac%5Fuk%2FDocuments%2FYear%201%20stuff%2FCOMP3220",
        "moodle_link": "https://moodle.kent.ac.uk/2024/course/view.php?id=877",
        "presto_link": "https://attendance.kent.ac.uk/selfregistration",
        "maps_link": "https://maps.app.goo.gl/ajSmUVg291Nw7nMVA",
        "start_time": "16:00",
        "end_time": "18:00"
    },
    {
        "module_code": "COMP3200",
        "module_name": "Introduction to OOP",
        "day": "Thursday",
        "location": "Pears PC Room 1",
        "onedrive_link": "https://livekentac-my.sharepoint.com/my?referringClient=Sync&id=%2Fpersonal%2Fjd890%5Fkent%5Fac%5Fuk%2FDocuments%2FYear%201%20stuff%2FCOMP3200",
        "moodle_link": "https://moodle.kent.ac.uk/2024/course/view.php?id=876",
        "presto_link": "https://attendance.kent.ac.uk/selfregistration",
        "maps_link": "https://maps.app.goo.gl/B7fJbDNh9GAj7Gg76",
        "start_time": "09:00",
        "end_time": "11:00"
    },
    {
        "module_code": "COMP3220",
        "module_name": "Foundations of Computing I",
        "day": "Thursday",
        "location": "Gulbenkian Cinema",
        "onedrive_link": "https://livekentac-my.sharepoint.com/my?referringClient=Sync&id=%2Fpersonal%2Fjd890%5Fkent%5Fac%5Fuk%2FDocuments%2FYear%201%20stuff%2FCOMP3220",
        "moodle_link": "https://moodle.kent.ac.uk/2024/course/view.php?id=877",
        "presto_link": "https://attendance.kent.ac.uk/selfregistration",
        "maps_link": "https://maps.app.goo.gl/vmHF2oVia11zCTaB6",
        "start_time": "13:00",
        "end_time": "14:00"
    },
    {
        "module_code": "COMP3370_COMP5810",
        "module_name": "Computers & the Cloud",
        "day": "Thursday",
        "location": "Woolf Lecture Theatre",
        "onedrive_link": "https://livekentac-my.sharepoint.com/my?referringClient=Sync&id=%2Fpersonal%2Fjd890%5Fkent%5Fac%5Fuk%2FDocuments%2FYear%201%20stuff%2FCOMP3370%5F5810",
        "moodle_link": "https://moodle.kent.ac.uk/2024/course/view.php?id=264",
        "presto_link": "https://attendance.kent.ac.uk/selfregistration",
        "maps_link": "https://maps.app.goo.gl/4koBCovC59Q3QP3G6",
        "start_time": "15:00",
        "end_time": "16:00"
    },
    {
        "module_code": "COMP3280_COMP5820",
        "module_name": "HCI",
        "day": "Thursday",
        "location": "Woolf Lecture Theatre",
        "onedrive_link": "https://livekentac-my.sharepoint.com/my?referringClient=Sync&id=%2Fpersonal%2Fjd890%5Fkent%5Fac%5Fuk%2FDocuments%2FYear%201%20stuff%2FCOMP3280%5F5820",
        "moodle_link": "https://moodle.kent.ac.uk/2024/course/view.php?id=263",
        "presto_link": "https://attendance.kent.ac.uk/selfregistration",
        "maps_link": "https://maps.app.goo.gl/4koBCovC59Q3QP3G6",
        "start_time": "16:00",
        "end_time": "17:00"
    },
    {
        "module_code": "COMP3370_COMP5810",
        "module_name": "Computers & the Cloud",
        "day": "Friday",
        "location": "Woolf Lecture Theatre",
        "onedrive_link": "https://livekentac-my.sharepoint.com/my?referringClient=Sync&id=%2Fpersonal%2Fjd890%5Fkent%5Fac%5Fuk%2FDocuments%2FYear%201%20stuff%2FCOMP3370%5F5810",
        "moodle_link": "https://moodle.kent.ac.uk/2024/course/view.php?id=264",
        "presto_link": "https://attendance.kent.ac.uk/selfregistration",
        "maps_link": "https://maps.app.goo.gl/4koBCovC59Q3QP3G6",
        "start_time": "10:00",
        "end_time": "11:00"
    },
    {
        "module_code": "COMP3220",
        "module_name": "Foundations of Computing I",
        "day": "Friday",
        "location": "Keynes Lecture Theatre 1",
        "onedrive_link": "https://livekentac-my.sharepoint.com/my?referringClient=Sync&id=%2Fpersonal%2Fjd890%5Fkent%5Fac%5Fuk%2FDocuments%2FYear%201%20stuff%2FCOMP3220",
        "moodle_link": "https://moodle.kent.ac.uk/2024/course/view.php?id=877",
        "presto_link": "https://attendance.kent.ac.uk/selfregistration",
        "maps_link": "https://maps.app.goo.gl/vxkpATbZRhAcUePE8",
        "start_time": "13:00",
        "end_time": "14:00"
    },
    {
        "module_code": "COMP3220",
        "module_name": "Foundations of Computing I",
        "day": "Friday",
        "location": "Kennedy Seminar Room 2",
        "onedrive_link": "https://livekentac-my.sharepoint.com/my?referringClient=Sync&id=%2Fpersonal%2Fjd890%5Fkent%5Fac%5Fuk%2FDocuments%2FYear%201%20stuff%2FCOMP3220",
        "moodle_link": "https://moodle.kent.ac.uk/2024/course/view.php?id=877",
        "presto_link": "https://attendance.kent.ac.uk/selfregistration",
        "maps_link": "https://maps.app.goo.gl/4rHNQZBh3GSamUTb6",
        "start_time": "15:00",
        "end_time": "17:00"
    }

];

// Mapping of module codes to image filenames
const moduleImages = {
    "COMP3370_COMP5810": "clouds.jpg",
    "COMP3220": "foundations.jpg",
    "COMP5200": "furtheroop.jpg",
    "COMP3280_COMP5820": "hci.jpg",
    "COMP3200": "oop.jpg"
};

// Function to get the current day in UK time
function getCurrentDayUK() {
    try {
        const now = new Date();
        const options = { timeZone: 'Europe/London', weekday: 'long' };
        const currentDay = now.toLocaleDateString('en-GB', options);
        console.log('Current Day (UK):', currentDay);
        return currentDay;
    } catch (error) {
        console.error('Error getting current day in UK time:', error);
        return null;
    }
}

// Function to get the current time in UK time
function getCurrentTimeUK() {
    try {
        const now = new Date();
        const options = { timeZone: 'Europe/London', hour: '2-digit', minute: '2-digit', hour12: false };
        const currentTime = now.toLocaleTimeString('en-GB', options);
        console.log('Current Time (UK):', currentTime);
        return currentTime;
    } catch (error) {
        console.error('Error getting current time in UK time:', error);
        return null;
    }
}

// Function to compare times
function isBeforeTime(currentTime, endTime) {
    try {
        const [currentHour, currentMinute] = currentTime.split(':').map(Number);
        const [endHour, endMinute] = endTime.split(':').map(Number);
        const isBefore = currentHour < endHour || (currentHour === endHour && currentMinute < endMinute);
        console.log(`Comparing times: ${currentTime} < ${endTime} = ${isBefore}`);
        return isBefore;
    } catch (error) {
        console.error('Error comparing times:', error);
        return false;
    }
}

// Function to get the day index (0 for Sunday, 1 for Monday, ..., 6 for Saturday)
function getDayIndex(day) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return days.indexOf(day);
}




// Function to populate lecture items in the HTML
function populateLectures() {
    const items = document.querySelectorAll('.item');
    
    items.forEach((item, index) => {
        try {
            if (index < lectures.length) {
                const lecture = lectures[index];
                const content = item.querySelector('.content');
                if (!content) throw new Error('Content element not found');
                
                const name = content.querySelector('.name');
                if (!name) throw new Error('Name element not found');
                
                const des = content.querySelector('.des');
                if (!des) throw new Error('Description element not found');
                
                name.textContent = lecture.module_name;
                des.innerHTML = `
                    <p>${lecture.day}</p>
                    <p>${lecture.start_time} - ${lecture.end_time}</p>
                    <p>${lecture.location}</p>
                    <p><a href="${lecture.onedrive_link}">OneDrive Link</a> | <a href="${lecture.moodle_link}">Moodle Link</a></p>
                `;
                
                // Set the background image based on the module code
                const imageUrl = moduleImages[lecture.module_code];
                if (imageUrl) {
                    item.style.backgroundImage = `url(image/${imageUrl})`;
                } else {
                    console.warn(`Image URL not found for module code: ${lecture.module_code}`);
                }
            } else {
                // Clear the item if there are no more upcoming lectures
                item.style.backgroundImage = '';
                const content = item.querySelector('.content');
                const name = content.querySelector('.name');
                const des = content.querySelector('.des');
                name.textContent = '';
                des.innerHTML = '';
            }
        } catch (error) {
            console.error(`Error populating lecture item at index ${index}:`, error);
        }
    });
}

function filterAndDisplayLectures() {
    try {
        // Get the current day and time in UK time
        const currentDay = getCurrentDayUK();
        const currentTime = getCurrentTimeUK();
        if (!currentDay || !currentTime) throw new Error('Failed to get current day or time');

        console.log('Filtering lectures for:', currentDay, currentTime);

        // Get the current day index
        const currentDayIndex = getDayIndex(currentDay);

        // Filter lectures based on the current day and time
        const upcomingLectures = lectures.filter(lecture => {
            const lectureDayIndex = getDayIndex(lecture.day);
            const isToday = lectureDayIndex === currentDayIndex;
            const isFuture = lectureDayIndex > currentDayIndex;
            const isUpcomingToday = isToday && isBeforeTime(currentTime, lecture.end_time);
            const isUpcoming = isFuture || isUpcomingToday;
            console.log(`Lecture: ${lecture.module_name}, Day: ${lecture.day}, Is Today: ${isToday}, Is Future: ${isFuture}, Is Upcoming Today: ${isUpcomingToday}, Is Upcoming: ${isUpcoming}`);
            return isUpcoming;
        });

        console.log('Upcoming Lectures:', upcomingLectures);

        // Populate the lecture items with the filtered lectures
        const items = document.querySelectorAll('.item');
        items.forEach((item, index) => {
            try {
                // Adjust the index to start from the correct position
                const lectureIndex = index - 1;
                if (lectureIndex >= 0 && lectureIndex < upcomingLectures.length) {
                    const lecture = upcomingLectures[lectureIndex];
                    const content = item.querySelector('.content');
                    if (!content) throw new Error('Content element not found');
                    
                    const name = content.querySelector('.name');
                    if (!name) throw new Error('Name element not found');
                    
                    const des = content.querySelector('.des');
                    if (!des) throw new Error('Description element not found');
                    
                    name.textContent = lecture.module_name;
                    des.innerHTML = `
                        <p>${lecture.module_code}</p>
                        <p>${lecture.day}</p>
                        <p>${lecture.start_time} - ${lecture.end_time}</p>
                        <p>${lecture.location}</p>
                        <p><a href="${lecture.onedrive_link}" target="_blank">OneDrive Link</a> | <a href="${lecture.moodle_link}" target="_blank">Moodle Link</a> | <a href="${lecture.presto_link}" target="_blank">Presto Link</a></p>
                    `;
                    
                    // Set the background image based on the module code
                    const imageUrl = moduleImages[lecture.module_code];
                    if (imageUrl) {
                        item.style.backgroundImage = `url(image/${imageUrl})`;
                    } else {
                        console.warn(`Image URL not found for module code: ${lecture.module_code}`);
                    }
                } else {
                    // Clear the item if there are no more upcoming lectures
                    item.style.backgroundImage = '';
                    const content = item.querySelector('.content');
                    const name = content.querySelector('.name');
                    const des = content.querySelector('.des');
                    name.textContent = '';
                    des.innerHTML = '';
                }
            } catch (error) {
                console.error(`Error populating lecture item at index ${index}:`, error);
            }
        });
    } catch (error) {
        console.error('Error filtering and displaying lectures:', error);
    }
};









// Function to set the current date and week
function setCurrentDateAndWeek() {
    const currentDateElement = document.getElementById('current-date');
    const currentWeekElement = document.getElementById('current-week');

    // Set current date
    const now = new Date();
    currentDateElement.innerText = now.toLocaleDateString('en-GB', {
        year: 'numeric', month: '2-digit', day: '2-digit'
    });

    // Calculate university week based on the first week starting on 5th August
    const firstWeekStart = new Date(now.getFullYear(), 7, 5); // 5th August
    const weekNumber = Math.floor((now - firstWeekStart) / (1000 * 60 * 60 * 24 * 7)) + 1; // Add 1 for week count

    currentWeekElement.innerText = `University Week: ${weekNumber}`;
}

// Call functions on page load
document.addEventListener('DOMContentLoaded', () => {
    setCurrentDateAndWeek();
    filterAndDisplayLectures();
    //populateLectures();
});




















let currentDate = new Date();


console.log("Current Date and Time:", currentDate);

let dayOfWeek = currentDate.getDay();
let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
console.log("Day of the Week:", days[dayOfWeek]);

currentDate.setFullYear(2024);


console.log("Updated Date (Year set to 2023):", currentDate);
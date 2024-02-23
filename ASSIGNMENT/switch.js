let weatherCode = 5; 
let weatherMessage="";

switch (weatherCode) {
  case 1:
    weatherMessage = "It's sunny today!";
    break;
  case 2:
    weatherMessage = "It's cloudy today.";
    break;
  case 3:
    weatherMessage = "It's raining today.";
    break;
  case 4:
    weatherMessage = "It's snowing today.";
    break;

  case 5:
        weatherMessage = "It's Cold today.";
    break;
   case 6:
    weatherMessage = "It's Hot today!";
    break;
  default:
    weatherMessage = "Weather condition unknown.";
}

console.log(weatherMessage);
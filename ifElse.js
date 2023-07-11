// temperature check

var temperature = 34;
if (temperature >= 30) {
  console.log("It's a hot day!");
} else {
  console.log("It's a normal day!");
}

// raining check

var isRaining = false;
if (isRaining) {
  console.log("Don't forget your umbrella!");
} else {
  console.log("Enjoy your day!");
}

// time check

let time = new Date().getHours();

if (time >= 6 && time <= 12) {
  console.log("Good morning!");
} else if (time > 12 && time <= 18) {
  console.log("Good afternoon");
} else if (time > 18 && time <= 24) {
  console.log("Good evening!");
} else {
  console.log("Good night!");
}

// # [JSL04] Submission: Monster Ternary Operator

// #### Challenge 1: Flavor Selection
// Given a variable that holds a user's preferred type of Monster Energy drink, 
// print whether the user prefers a "Regular" or "Sugar-free" variety. If the preference is not set, default to "Regular".

let userPreference = 'Sugar-free'; // Possible values: 'Regular', 'Sugar-free', or undefined
let drinktype = userPreference ? userPreference : "regular"; //ternary operator to check preference
console.log('user prefers a ${drinktype} Regular'); //results

// #### Challenge 2: Stock Check
// You have a variable that tracks the number of Monster Energy cans left in the fridge. 
// Use a ternary operator to print "Time to restock!" if the number is less than 5, or "We're stocked!" if the number is 5 or more.

let cansLeft = 3; // Any number of cans
let stockmessage = cansLeft >5 ? 'time to restock':'we are stocked'// ternary operator to check for stock
console.log(stockmessage);//results


// #### Challenge 3: Workout Intensity
// Based on the current heart rate, determine if the user should drink a Monster Energy drink to boost their workout. 
// If the heart rate is below 100 bpm, print "Boost needed!", otherwise, print "Energy levels are high!".

let heartRate = 95; // Current heart rate in bpm
let heartRateMessage = heartRate >95 ? 'Boost needed!':'Energy levels are high!';//ternary operator to check heartRate
console.log(heartRateMessage);//results


// #### Challenge 4: Temperature Suitability
// Monster Energy drinks are best served cold. Given the current temperature, use a ternary to print "Chilled to perfection!"
// if the temperature is below or equal to 5°C, or "Needs a cooler!" if above 5°C. 

let currentTemp = 4; // Current temperature in °C
let currentTempMessage = currentTemp < 5 ? 'Chilled to perfection!':'Needs a cooler!'// ternary operator to check tempreture 
console.log(currentTempMessage); //results


// #### Challenge 5: Late Night Coding Session
// Determine if it's a good idea to have a Monster Energy drink based on the current hour.
// If it's between 7am and midnight (24-hour format), print "Unleash the beast!",
// otherwise, print "Better stick to water."

// Define the current hour in 24-hour format
let currentHour = 22; 

// Write your code below this line to determine if it's a good idea to have a Monster Energy drink based on the current hour
// If it's between 7am and midnight (24-hour format), print "Unleash the beast!"
// Otherwise, print "Better stick to water."
let monsterEnergyMessage = currentHour >= 7 && currentHour < 23 ? 'Unleash the beast!' : 'Better stck to water.';// ternary to check hour
console.log (monsterEnergyMessage);


// In each of these challenges, the ternary operator is used to decide between two options based on a condition, 
// demonstrating its utility for concise conditional logic. Remember that while ternaries can make the code more succinct, 
// they should be used judiciously to maintain readability, especially for more complex conditions.
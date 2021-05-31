//1. Make a loop that prints the numbers from 0 to 10.

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

console.log("-------------------------------------------------------");

//2. Make a loop that prints the numbers from 10 to 20.


for (let i = 10; i <= 20; i++) {
    console.log(i);
}

console.log("-------------------------------------------------------");


//3. Make a loop that prints the numbers from -10 to 10.

for (let i  = -10; i <= 10; i++) {
    console.log(i);
}


console.log("-------------------------------------------------------");

//4. Make a loop that prints the numbers from 10 to -10.

for (let i = 10; i >= -10; i--) {
    console.log("10 to -10: ", i);
}


console.log("-------------------------------------------------------");

//5. Make a string. Then, make a loop that prints all the individual characters of that string.


const stringOfTheDay = "I am tired";

for (let i = 0; i < stringOfTheDay.length; i++) {
    console.log(stringOfTheDay[i]);
}




console.log("-------------------------------------------------------");

//6. Make an array with 5 items. Then, make a loop that prints all the individual items of that array.

const stadtteile = [ "Neukölln", "Kreuzberg", "Friedrichshain", "Prenzlauer Berg", "Lichtenberg"];

for (let i = 0; i < stadtteile.length; i++) {
    console.log(stadtteile[i]);
}




console.log
("-------------------------------------------------------");

//7. Make an array with 6 items. Then, make a loop that prints every second item of that array.

const colours = ["red", "blue", "green", "pink", "purple", "yellow"];

for (let i = 0; i < colours.length; i++) {
    if (i % 2 === 1) {
        console.log(colours[i]);
    }  
}


console.log("-------------------------------------------------------");

//8. Make an array with 6 items. Then, make a loop that prints every third item of that array.

const animals = ["fish", "horse", "pig", "anteater", "chinchilla", "mongoose"];

for (let i = 0; i < animals.length; i++) {
    if (i % 3 == 2) {
        console.log(animals[i]);
    }
}



console.log("-------------------------------------------------------");

//9. Make an array with 10 items. Then, make a loop that prints every third item of that array starting from the 2nd.

const tenItemArray = ["lemon", "lime", "lead", "loop", "leash", "leg", "foot", "fish", "foo", "bar"];

// need to print leg and foo

for (let i = 5; i < tenItemArray.length; i++) {
    if (i % 3 == 2) {
        console.log(tenItemArray[i]);    
    } 
}

console.log("-------------------------------------------------------");

//10. Make an array with 7 objects. Each objects should have a property called counter. Create a loop that prints only the counter value of each object.

const sevenItemArray = [
    { counter: 1, item: "Milk" },
    { counter: 2, item: "Orange juice" },
    { counter: 3, item: "Omelette" },
    { counter: 4, item: "Necklace" },
    { counter: 5, item: "javascript" },
    { counter: 6, item: "Numbers" },
    { counter: 7, item: "Words" }
];
 
for (let i = 0; i < sevenItemArray.length; i++) {
    console.log(sevenItemArray[i].counter);
}


console.log("-------------------------------------------------------");

//11. Save a random whole number between 0 and 100 to a variable. Then print all numbers from 0 to 100 and as soon as you reach the random number you created, stop your loop.

const randomWholeNumber = Math.round(Math.random() * 100);

for (let i = 0; i < randomWholeNumber; i++) {
    console.log(i);
}







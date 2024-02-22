// 2. Personal Message
let user_name = "Abdullah";
console.log(`Hello ${user_name}, would you like to learn some Python today?`);

// 3. Name Cases
let person_name = "Syed Sohaib Hassan";
console.log(person_name.toLowerCase());
console.log(person_name.toUpperCase());
console.log(person_name.replace(/\b\w/g, c => c.toUpperCase()));

// 4. Famous Quote
let quote = "A person who never made a mistake never tried anything new.";
let author = "Rumi";
console.log(`${author} once said, "${quote}"`);

// 5. Famous Quote 2
let famous_person = "Rumi";
let message = `${famous_person} once said, "${quote}"`;
console.log(message);

// 6. Stripping Names
let person = " \t\nAhmed Khan \t\n";
console.log(person);
console.log(person.trim());

// 7. Number Eight
console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);

// 9. Favorite Number
let favoriteNumber = 7;
console.log(`My favorite number is ${favoriteNumber}`);

// 10. Adding Comments
// Program 1
// Does something simple
let a = 5;
let b = 3;
console.log(a + b);

// Program 2
// Also does something simple
let x = 10;
let y = 5;
console.log(x * y);

// 11. Names
let names = ["Sohaib", "Nofil", "Ayan", "Kashif", "Ahmed"];
names.forEach(name => console.log(name));

// 12. Greetings
let greeting = "Hello, ";
names.forEach(name => console.log(greeting + name));

// 13. Your Own Array
let vehicles = ["car", "motorcycle", "bicycle"];
vehicles.forEach(vehicle => console.log(`I would like to own a ${vehicle}.`));

// 14. Guest List
let guests = ["Ibn Sina", "Ibn Khaldun", "Al-Ghazali"];
guests.forEach(guest => console.log(`Dear ${guest}, you are invited to dinner.`));

// 15. Changing Guest List
let unableToAttend = guests.pop();
guests.push("Ibn Rushd");
guests.forEach(guest => console.log(`Dear ${guest}, you are invited to dinner.`));

// 16. More Guests
console.log("We found a bigger dinner table!");
guests.unshift("Al-Biruni");
guests.splice(2, 0, "Al-Khwarizmi");
guests.push("Al-Farabi");
guests.forEach(guest => console.log(`Dear ${guest}, you are invited to dinner.`));

// 17. Shrinking Guest List
console.log("The new dinner table won't arrive in time, we can only invite two people.");
while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, we can't invite you to dinner.`);
}
guests.forEach(guest => console.log(`Dear ${guest}, you are still invited to dinner.`));
guests = [];
console.log(guests);

// 18. Seeing the World
let places = ["Mecca", "Medina", "Istanbul", "Cairo", "Makkah"];
console.log(places);
console.log(places.slice().sort());
console.log(places);
console.log(places.slice().sort().reverse());
console.log(places);
places.reverse();
console.log(places);
places.reverse();
console.log(places);
console.log(places.slice().sort());
console.log(places.slice().sort().reverse());

// 19. Dinner Guests
console.log(`We are inviting ${guests.length} people to dinner.`);

// 20. Something in an Array
let mountains = ["Hira", "Uhud", "Safah", "Marwah", "Jabal al-Nour"];
console.log(mountains);

// 21. Something in an Object
let city = {
    name: "Madinah",
    country: "Saudi Arabia",
    population: "1.2 million"
};
console.log(city);

// 22. Intentional Error
// Uncomment the line below to produce an intentional error
// console.log(mountains[5]);

// 23. Conditional Tests
let car = 'subaru';
console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

// Add more conditional tests here...

// 24. More Conditional Tests
// Add more conditional tests here...

// 25. Alien Colors #1
let alien_color = 'green';
if (alien_color === 'green') {
    console.log("You earned 5 points!");
}

// 26. Alien Colors #2
if (alien_color === 'green') {
    console.log("You earned 5 points for shooting the alien.");
} else {
    console.log("You earned 10 points.");
}

// 27. Alien Colors #3
if (alien_color === 'green') {
    console.log("You earned 5 points.");
} else if (alien_color === 'yellow') {
    console.log("You earned 10 points.");
} else if (alien_color === 'red') {
    console.log("You earned 15 points.");
}

// 28. Stages of Life
let age = 30;
if (age < 2) {
    console.log("You are a baby.");
} else if (age < 4) {
    console.log("You are a toddler.");
} else if (age < 13) {
    console.log("You are a kid.");
} else if (age < 20) {
    console.log("You are a teenager.");
} else if (age < 65) {
    console.log("You are an adult.");
} else {
    console.log("You are an elder.");
}

// 29. Favorite Fruit
let favorite_fruits = ["banana", "apple", "mango"];
if (favorite_fruits.includes("banana")) {
    console.log("You really like bananas!");
}

// 30. Hello Admin
let usernames = ["admin", "john", "jane", "mary", "mark"];
usernames.forEach(username => {
    if (username === "admin") {
        console.log("Hello admin, would you like to see a status report?");
    } else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
});

// 31. No Users
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
usernames = [];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}

// 32. Checking Usernames
let current_users = ["John", "Jane", "admin", "mary", "mark"];
let new_users = ["jane", "mark", "peter", "susan", "admin"];
new_users.forEach(user => {
    if (current_users.map(u => u.toLowerCase()).includes(user.toLowerCase())) {
        console.log(`Sorry, ${user}, that username is already taken.`);
    } else {
        console.log(`Congratulations, ${user}, that username is available.`);
    }
});

// 33. Ordinal Numbers
let numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
numbers.forEach(number => {
    let ordinal;
    switch (number) {
        case "1":
            ordinal = "1st";
            break;
        case "2":
            ordinal = "2nd";
            break;
        case "3":
            ordinal = "3rd";
            break;
        default:
            ordinal = number + "th";
            break;
    }
    console.log(ordinal);
});

// 34. Pizzas
let pizzas = ["Margherita", "Pepperoni", "Hawaiian"];
pizzas.forEach(pizza => console.log(`I like ${pizza} pizza.`));
console.log("I really love pizza!");

// 35. Animals
let animals = ["Cat", "Dog", "Parrot"];
animals.forEach(animal => console.log(`A ${animal.toLowerCase()} would make a great pet.`));
console.log("Any of these animals would make a great pet!");

// 36. T-Shirt
function make_shirt(size: string, message: string) {
    console.log(`Size: ${size}, Message: ${message}`);
}
make_shirt("Large", "I love TypeScript");

// 37. Large Shirts
function make_shirt(size: string = "Large", message: string = "I love TypeScript") {
    console.log(`Size: ${size}, Message: ${message}`);
}
make_shirt();
make_shirt("Medium");
make_shirt("Small", "I love JavaScript");

// 38. Cities
function describe_city(city: string, country: string = "Pakistan") {
    console.log(`${city} is in ${country}.`);
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("Dubai", "UAE");

// 39. City Names
function city_country(city: string, country: string): string {
    return `${city}, ${country}`;
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Istanbul", "Turkey"));
console.log(city_country("Cairo", "Egypt"));

// 40. Album
function make_album(artist: string, title: string, tracks?: number): object {
    let album = { artist: artist, title: title };
    if (tracks) {
        album["tracks"] = tracks;
    }
    return album;
}
console.log(make_album("Ed Sheeran", "÷"));
console.log(make_album("Adele", "25", 11));
console.log(make_album("Taylor Swift", "1989"));

// 41. Magicians
function show_magicians(magicians: string[]) {
    magicians.forEach(magician => console.log(magician));
}
let magicians_list = ["David Blaine", "Dynamo", "Penn & Teller"];
show_magicians(magicians_list);

// 42. Great Magicians
function make_great(magicians: string[]): string[] {
    return magicians.map(magician => `the Great ${magician}`);
}
magicians_list = make_great(magicians_list.slice());
show_magicians(magicians_list);

// 43. Unchanged Magicians
let original_magicians_list = ["David Blaine", "Dynamo", "Penn & Teller"];
let new_magicians_list = make_great(original_magicians_list.slice());
show_magicians(original_magicians_list);
show_magicians(new_magicians_list);

// 44. Sandwiches
function make_sandwich(...items: string[]) {
    console.log("Sandwich Order:");
    items.forEach(item => console.log(`- ${item}`));
}
make_sandwich("Bread", "Cheese", "Tomato");
make_sandwich("Bread", "Chicken", "Lettuce", "Mayonnaise");
make_sandwich("Baguette", "Ham", "Cheese", "Mustard");

// 45. Cars
function car_info(manufacturer: string, model: string, ...extras: string[]): object {
    let car = { manufacturer: manufacturer, model: model };
    extras.forEach(extra => {
        let [key, value] = extra.split(":");
        car[key] = value;
    });
    return car;
}
console.log(car_info("Toyota", "Corolla", "color: blue", "year: 2022"));
console.log(car_info("Honda", "Civic", "color: red", "sunroof: yes"));
console.log(car_info("Ford", "Mustang", "color: yellow"));

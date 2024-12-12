//const animal = {
//    id: 48,
//    name:"betty",
//    type: "cat",
//    numLegs: "7"
//};
////console.log(animal);
////
////animal[name] = "sal";
////console.log(animal);
////
////animal.type = "cow";
////
////console.log(animal);
////
////animal.numLegs= 7;
////console.log(animal);
//
//
//console.log("betty" in animal);
//
//console.log(Object.keys(animal));


let person = {
    name: "Terry",
    age: 23,
    favoriteColor: "green",
    height: "6'8",
    satScore: 400,
    job: "Basketball player",
    biggestFear: "infalted basketballs",
    favoriteNumber: 3,
};

console.log(person);
console.log(person.height);

person.age =25;
console.log(person);

let persontwo= {
    name: "Shellie",
    age: 22,
    height: "7'6",
    job: "Volleyball Player",
    favoriteNumber: 16,
};

console.log( person.name + " and " + persontwo.name + " met eachother at a sports banquet for the best athletes in the world.");
console.log( person.name +" was intimidated by " + persontwo.name + " becasue she was taller than him. She was " + persontwo.height + " and he was " + person.height);
console.log(person.name + " had always been the tallest perosn everywhere he went and never met some to literally look up to. He felt insecure and small.");

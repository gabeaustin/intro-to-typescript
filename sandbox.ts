// arrays
let names = ["luigi", "mario", "yoshi"];

names.push("toad");
// names.push(3);
// names[0] = false;

let numbers = [10, 20, 30, 40];
// numbers.push(25);
// numbers.push("shawn");

let mixed = ["ken", 4, "chun-li", 8, 9, true];

mixed.push("ryu");
mixed.push(8);
mixed[0] = 3;

// objects
let ninja = {
    name: "mario",
    belt: "black",
    age: 30
};

ninja.age = 40;
ninja.name = "ryu";
// ninja.age = "30";
// ninja.skills = ["fighting"];

// override entire object
// must match structure that we initially declared
ninja = {
    name: "yoshi",
    belt: "yellow",
    age: 40
    // skills: []
}
